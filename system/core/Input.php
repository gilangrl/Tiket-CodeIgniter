<?php  if ( ! defined('BASEPATH')) exit('No direct script access allowed');
/**
 * CodeIgniter
 *
 * An open source application development framework for PHP 5.1.6 or newer
 *
 * @package		CodeIgniter
 * @author		EllisLab Dev Team
 * @copyright		Copyright (c) 2008 - 2014, EllisLab, Inc.
 * @copyright		Copyright (c) 2014 - 2015, British Columbia Institute of Technology (http://bcit.ca/)
 * @license		http://codeigniter.com/user_guide/license.html
 * @link		http://codeigniter.com
 * @since		Version 1.0
 * @filesource
 */

// ------------------------------------------------------------------------

/**
 * Input Class
 *
 * Pre-processes global input data for security
 *
 * @package		CodeIgniter
 * @subpackage	Libraries
 * @category	Input
 * @author		EllisLab Dev Team
 * @link		http://codeigniter.com/user_guide/libraries/input.html
 */
class CI_Input {

	/**
	 * IP address of the current user
	 *
	 * @var string
	 */
	var $ip_address				= FALSE;
	/**
	 * user agent (web browser) being used by the current user
	 *
	 * @var string
	 */
	var $user_agent				= FALSE;
	/**
	 * If FALSE, then $_GET will be set to an empty array
	 *
	 * @var bool
	 */
	var $_allow_get_array		= TRUE;
	/**
	 * If TRUE, then newlines are standardized
	 *
	 * @var bool
	 */
	var $_standardize_newlines	= TRUE;
	/**
	 * Determines whether the XSS filter is always active when GET, POST or COOKIE data is encountered
	 * Set automatically based on config setting
	 *
	 * @var bool
	 */
	var $_enable_xss			= FALSE;
	/**
	 * Enables a CSRF cookie token to be set.
	 * Set automatically based on config setting
	 *
	 * @var bool
	 */
	var $_enable_csrf			= FALSE;
	/**
	 * List of all HTTP request headers
	 *
	 * @var array
	 */
	protected $headers			= array();

	/**
	 * Constructor
	 *
	 * Sets whether to globally enable the XSS processing
	 * and whether to allow the $_GET array
	 *
	 * @return	void
	 */
	public function __construct()
	{
		log_message('debug', "Input Class Initialized");

		$this->_allow_get_array	= (config_item('allow_get_array') === TRUE);
		$this->_enable_xss		= (config_item('global_xss_filtering') === TRUE);
		$this->_enable_csrf		= (config_item('csrf_protection') === TRUE);

		global $SEC;
		$this->security =& $SEC;

		// Do we need the UTF-8 class?
		if (UTF8_ENABLED === TRUE)
		{
			global $UNI;
			$this->uni =& $UNI;
		}

		// Sanitize global arrays
		$this->_sanitize_globals();
	}

	// --------------------------------------------------------------------

	/**
	 * Fetch from array
	 *
	 * This is a helper function to retrieve values from global arrays
	 *
	 * @access	private
	 * @param	array
	 * @param	string
	 * @param	bool
	 * @return	string
	 */
	function _fetch_from_array(&$array, $index = '', $xss_clean = FALSE)
	{
		if ( ! isset($array[$index]))
		{
			return FALSE;
		}

		if ($xss_clean === TRUE)
		{
			$allowedForUser = array(
					 'a' => array('href' => array(), 'title' => array()),
					 'br' => array(),
					 'p' => array(),
					 'b' => array(),
					 'strong' => array(),
					 'u' => array(),
					 'em' => array()
					);
			return $this->security->xss_clean($array[$index]);
		}
		
		return $this->xss_clean($array[$index]);
	}

	function xss_clean($string){
		$string = str_replace(array('[\', \']'), '', $string);
		$string = preg_replace('/\[.*\]/U', '', $string);
		$string = preg_replace('/&(amp;)?#?[a-z0-9]+;/i', '', $string);
		//$string = htmlentities($string, ENT_COMPAT, 'utf-8');
		$string = preg_replace('/&([a-z])(acute|uml|circ|grave|ring|cedil|slash|tilde|caron|lig|quot|rsquo);/i', '\\1', $string );
		if (get_magic_quotes_gpc())
		{
			$string = stripslashes($string);
			$string = strip_tags($string);
			return trim($string);
		}
		else
			return	$string;
	
	}

	// --------------------------------------------------------------------

	/**
	* Fetch an item from the GET array
	*
	* @access	public
	* @param	string
	* @param	bool
	* @return	string
	*/
	function get($index = NULL, $xss_clean = TRUE)
	{
		// Check if a field has been provided
		if ($index === NULL AND ! empty($_GET))
		{
			$get = array();

			// loop through the full _GET array
			foreach (array_keys($_GET) as $key)
			{
				$get[$key] = $this->_fetch_from_array($_GET, $key, $xss_clean);
			}
			return $get;
		}

		return $this->_fetch_from_array($_GET, $index, $xss_clean);
	}

	// --------------------------------------------------------------------

	/**
	* Fetch an item from the POST array
	*
	* @access	public
	* @param	string
	* @param	bool
	* @return	string
	*/
	function post($index = NULL, $xss_clean = TRUE)
	{
		// Check if a field has been provided
		if ($index === NULL AND ! empty($_POST))
		{
			$post = array();

			// Loop through the full _POST array and return it
			foreach (array_keys($_POST) as $key)
			{
				$post[$key] = $this->_fetch_from_array($_POST, $key, $xss_clean);
			}
			return $post;
		}
		return $this->_fetch_from_array($_POST, $index, $xss_clean);
	}


	// --------------------------------------------------------------------

	/**
	* Fetch an item from either the GET array or the POST
	*
	* @access	public
	* @param	string	The index key
	* @param	bool	XSS cleaning
	* @return	string
	*/
	function get_post($index = '', $xss_clean = FALSE)
	{
		if ( ! isset($_POST[$index]) )
		{
			return $this->get($index, $xss_clean);
		}
		else
		{
			return $this->post($index, $xss_clean);
		}
	}

	// --------------------------------------------------------------------

	/**
	* Fetch an item from the COOKIE array
	*
	* @access	public
	* @param	string
	* @param	bool
	* @return	string
	*/
	function cookie($index = '', $xss_clean = FALSE)
	{
		return $this->_fetch_from_array($_COOKIE, $index, $xss_clean);
	}

	// ------------------------------------------------------------------------

	/**
	* Set cookie
	*
	* Accepts six parameter, or you can submit an associative
	* array in the first parameter containing all the values.
	*
	* @access	public
	* @param	mixed
	* @param	string	the value of the cookie
	* @param	string	the number of seconds until expiration
	* @param	string	the cookie domain.  Usually:  .yourdomain.com
	* @param	string	the cookie path
	* @param	string	the cookie prefix
	* @param	bool	true makes the cookie secure
	* @return	void
	*/
	function set_cookie($name = '', $value = '', $expire = '', $domain = '', $path = '/', $prefix = '', $secure = FALSE)
	{
		if (is_array($name))
		{
			// always leave 'name' in last place, as the loop will break otherwise, due to $$item
			foreach (array('value', 'expire', 'domain', 'path', 'prefix', 'secure', 'name') as $item)
			{
				if (isset($name[$item]))
				{
					$$item = $name[$item];
				}
			}
		}

		if ($prefix == '' AND config_item('cookie_prefix') != '')
		{
			$prefix = config_item('cookie_prefix');
		}
		if ($domain == '' AND config_item('cookie_domain') != '')
		{
			$domain = config_item('cookie_domain');
		}
		if ($path == '/' AND config_item('cookie_path') != '/')
		{
			$path = config_item('cookie_path');
		}
		if ($secure == FALSE AND config_item('cookie_secure') != FALSE)
		{
			$secure = config_item('cookie_secure');
		}

		if ( ! is_numeric($expire))
		{
			$expire = time() - 86500;
		}
		else
		{
			$expire = ($expire > 0) ? time() + $expire : 0;
		}

		setcookie($prefix.$name, $value, $expire, $path, $domain, $secure);
	}

	// --------------------------------------------------------------------

	/**
	* Fetch an item from the SERVER array
	*
	* @access	public
	* @param	string
	* @param	bool
	* @return	string
	*/
	function server($index = '', $xss_clean = FALSE)
	{
		return $this->_fetch_from_array($_SERVER, $index, $xss_clean);
	}

	// --------------------------------------------------------------------

	/**
	* Fetch the IP Address
	*
	* @return	string
	*/
	public function ip_address()
	{
		if ($this->ip_address !== FALSE)
		{
			return $this->ip_address;
		}

		$proxy_ips = config_item('proxy_ips');
		if ( ! empty($proxy_ips))
		{
			$proxy_ips = explode(',', str_replace(' ', '', $proxy_ips));
			foreach (array('HTTP_X_FORWARDED_FOR', 'HTTP_CLIENT_IP', 'HTTP_X_CLIENT_IP', 'HTTP_X_CLUSTER_CLIENT_IP') as $header)
			{
				if (($spoof = $this->server($header)) !== FALSE)
				{
					// Some proxies typically list the whole chain of IP
					// addresses through which the client has reached us.
					// e.g. client_ip, proxy_ip1, proxy_ip2, etc.
					if (strpos($spoof, ',') !== FALSE)
					{
						$spoof = explode(',', $spoof, 2);
						$spoof = $spoof[0];
					}

					if ( ! $this->valid_ip($spoof))
					{
						$spoof = FALSE;
					}
					else
					{
						break;
					}
				}
			}

			$this->ip_address = ($spoof !== FALSE && in_array($_SERVER['REMOTE_ADDR'], $proxy_ips, TRUE))
				? $spoof : $_SERVER['REMOTE_ADDR'];
		}
		else
		{
			$this->ip_address = $_SERVER['REMOTE_ADDR'];
		}

		if ( ! $this->valid_ip($this->ip_address))
		{
			$this->ip_address = '0.0.0.0';
		}

		return $this->ip_address;
	}

	// --------------------------------------------------------------------

	/**
	* Validate IP Address
	*
	* @access	public
	* @param	string
	* @param	string	ipv4 or ipv6
	* @return	bool
	*/
	public function valid_ip($ip, $which = '')
	{
		$which = strtolower($which);

		// First check if filter_var is available
		if (is_callable('filter_var'))
		{
			switch ($which) {
				case 'ipv4':
					$flag = FILTER_FLAG_IPV4;
					break;
				case 'ipv6':
					$flag = FILTER_FLAG_IPV6;
					break;
				default:
					$flag = '';
					break;
			}

			return (bool) filter_var($ip, FILTER_VALIDATE_IP, $flag);
		}

		if ($which !== 'ipv6' && $which !== 'ipv4')
		{
			if (strpos($ip, ':') !== FALSE)
			{
				$which = 'ipv6';
			}
			elseif (strpos($ip, '.') !== FALSE)
			{
				$which = 'ipv4';
			}
			else
			{
				return FALSE;
			}
		}

		$func = '_valid_'.$which;
		return $this->$func($ip);
	}

	// --------------------------------------------------------------------

	/**
	* Validate IPv4 Address
	*
	* Updated version suggested by Geert De Deckere
	*
	* @access	protected
	* @param	string
	* @return	bool
	*/
	protected function _valid_ipv4($ip)
	{
		$ip_segments = explode('.', $ip);

		// Always 4 segments needed
		if (count($ip_segments) !== 4)
		{
			return FALSE;
		}
		// IP can not start with 0
		if ($ip_segments[0][0] == '0')
		{
			return FALSE;
		}

		// Check each segment
		foreach ($ip_segments as $segment)
		{
			// IP segments must be digits and can not be
			// longer than 3 digits or greater then 255
			if ($segment == '' OR preg_match("/[^0-9]/", $segment) OR $segment > 255 OR strlen($segment) > 3)
			{
				return FALSE;
			}
		}

		return TRUE;
	}

	// --------------------------------------------------------------------

	/**
	* Validate IPv6 Address
	*
	* @access	protected
	* @param	string
	* @return	bool
	*/
	protected function _valid_ipv6($str)
	{
		// 8 groups, separated by :
		// 0-ffff per group
		// one set of consecutive 0 groups can be collapsed to ::

		$groups = 8;
		$collapsed = FALSE;

		$chunks = array_filter(
			preg_split('/(:{1,2})/', $str, NULL, PREG_SPLIT_DELIM_CAPTURE)
		);

		// Rule out easy nonsense
		if (current($chunks) == ':' OR end($chunks) == ':')
		{
			return FALSE;
		}

		// PHP supports IPv4-mapped IPv6 addresses, so we'll expect those as well
		if (strpos(end($chunks), '.') !== FALSE)
		{
			$ipv4 = array_pop($chunks);

			if ( ! $this->_valid_ipv4($ipv4))
			{
				return FALSE;
			}

			$groups--;
		}

		while ($seg = array_pop($chunks))
		{
			if ($seg[0] == ':')
			{
				if (--$groups == 0)
				{
					return FALSE;	// too many groups
				}

				if (strlen($seg) > 2)
				{
					return FALSE;	// long separator
				}

				if ($seg == '::')
				{
					if ($collapsed)
					{
						return FALSE;	// multiple collapsed
					}

					$collapsed = TRUE;
				}
			}
			elseif (preg_match("/[^0-9a-f]/i", $seg) OR strlen($seg) > 4)
			{
				return FALSE; // invalid segment
			}
		}

		return $collapsed OR $groups == 1;
	}

	// --------------------------------------------------------------------

	/**
	* User Agent
	*
	* @access	public
	* @return	string
	*/
	function user_agent()
	{
		if ($this->user_agent !== FALSE)
		{
			return $this->user_agent;
		}

		$this->user_agent = ( ! isset($_SERVER['HTTP_USER_AGENT'])) ? FALSE : $_SERVER['HTTP_USER_AGENT'];

		return $this->user_agent;
	}

	// --------------------------------------------------------------------

	/**
	* Sanitize Globals
	*
	* This function does the following:
	*
	* Unsets $_GET data (if query strings are not enabled)
	*
	* Unsets all globals if register_globals is enabled
	*
	* Standardizes newline characters to \n
	*
	* @access	private
	* @return	void
	*/
	function _sanitize_globals()
	{
		// It would be "wrong" to unset any of these GLOBALS.
		$protected = array('_SERVER', '_GET', '_POST', '_FILES', '_REQUEST',
							'_SESSION', '_ENV', 'GLOBALS', 'HTTP_RAW_POST_DATA',
							'system_folder', 'application_folder', 'BM', 'EXT',
							'CFG', 'URI', 'RTR', 'OUT', 'IN');

		// Unset globals for securiy.
		// This is effectively the same as register_globals = off
		foreach (array($_GET, $_POST, $_COOKIE) as $global)
		{
			if ( ! is_array($global))
			{
				if ( ! in_array($global, $protected))
				{
					global $$global;
					$$global = NULL;
				}
			}
			else
			{
				foreach ($global as $key => $val)
				{
					if ( ! in_array($key, $protected))
					{
						global $$key;
						$$key = NULL;
					}
				}
			}
		}

		// Is $_GET data allowed? If not we'll set the $_GET to an empty array
		if ($this->_allow_get_array == FALSE)
		{
			$_GET = array();
		}
		else
		{
			if (is_array($_GET) AND count($_GET) > 0)
			{
				foreach ($_GET as $key => $val)
				{
					$_GET[$this->_clean_input_keys($key)] = $this->_clean_input_data($val);
				}
			}
		}

		// Clean $_POST Data
		if (is_array($_POST) AND count($_POST) > 0)
		{
			foreach ($_POST as $key => $val)
			{
				$_POST[$this->_clean_input_keys($key)] = $this->_clean_input_data($val);
			}
		}

		// Clean $_COOKIE Data
		if (is_array($_COOKIE) AND count($_COOKIE) > 0)
		{
			// Also get rid of specially treated cookies that might be set by a server
			// or silly application, that are of no use to a CI application anyway
			// but that when present will trip our 'Disallowed Key Characters' alarm
			// http://www.ietf.org/rfc/rfc2109.txt
			// note that the key names below are single quoted strings, and are not PHP variables
			unset($_COOKIE['$Version']);
			unset($_COOKIE['$Path']);
			unset($_COOKIE['$Domain']);

			// Work-around for PHP bug #66827 (https://bugs.php.net/bug.php?id=66827)
			//
			// The session ID sanitizer doesn't check for the value type and blindly does
			// an implicit cast to string, which triggers an 'Array to string' E_NOTICE.
			$sess_cookie_name = config_item('cookie_prefix').config_item('sess_cookie_name');
			if (isset($_COOKIE[$sess_cookie_name]) && ! is_string($_COOKIE[$sess_cookie_name]))
			{
				unset($_COOKIE[$sess_cookie_name]);
			}

			foreach ($_COOKIE as $key => $val)
			{
				// _clean_input_data() has been reported to break encrypted cookies
				if ($key === $sess_cookie_name && config_item('sess_encrypt_cookie'))
				{
					continue;
				}

				$_COOKIE[$this->_clean_input_keys($key)] = $this->_clean_input_data($val);
			}
		}

		// Sanitize PHP_SELF
		$_SERVER['PHP_SELF'] = strip_tags($_SERVER['PHP_SELF']);


		// CSRF Protection check on HTTP requests
		if ($this->_enable_csrf == TRUE && ! $this->is_cli_request())
		{
			$this->security->csrf_verify();
		}

		log_message('debug', "Global POST and COOKIE data sanitized");
	}

	// --------------------------------------------------------------------

	/**
	* Clean Input Data
	*
	* This is a helper function. It escapes data and
	* standardizes newline characters to \n
	*
	* @access	private
	* @param	string
	* @return	string
	*/
	function _clean_input_data($str)
	{
		if (is_array($str))
		{
			$new_array = array();
			foreach ($str as $key => $val)
			{
				$new_array[$this->_clean_input_keys($key)] = $this->_clean_input_data($val);
			}
			return $new_array;
		}

		/* We strip slashes if magic quotes is on to keep things consistent

		   NOTE: In PHP 5.4 get_magic_quotes_gpc() will always return 0 and
			 it will probably not exist in future versions at all.
		*/
		if ( ! is_php('5.4') && get_magic_quotes_gpc())
		{
			$str = stripslashes($str);
		}

		// Clean UTF-8 if supported
		if (UTF8_ENABLED === TRUE)
		{
			$str = $this->uni->clean_string($str);
		}

		// Remove control characters
		$str = remove_invisible_characters($str);

		// Should we filter the input data?
		if ($this->_enable_xss === TRUE)
		{
			$str = $this->security->xss_clean($str);
		}

		// Standardize newlines if needed
		if ($this->_standardize_newlines == TRUE)
		{
			if (strpos($str, "\r") !== FALSE)
			{
				$str = str_replace(array("\r\n", "\r", "\r\n\n"), PHP_EOL, $str);
			}
		}

		return $str;
	}

	// --------------------------------------------------------------------

	/**
	* Clean Keys
	*
	* This is a helper function. To prevent malicious users
	* from trying to exploit keys we make sure that keys are
	* only named with alpha-numeric text and a few other items.
	*
	* @access	private
	* @param	string
	* @return	string
	*/
	function _clean_input_keys($str)
	{
		if ( ! preg_match("/^[a-z0-9:_\/-]+$/i", $str))
		{
			exit('Disallowed Key Characters.');
		}

		// Clean UTF-8 if supported
		if (UTF8_ENABLED === TRUE)
		{
			$str = $this->uni->clean_string($str);
		}

		return $str;
	}

	// --------------------------------------------------------------------

	/**
	 * Request Headers
	 *
	 * In Apache, you can simply call apache_request_headers(), however for
	 * people running other webservers the function is undefined.
	 *
	 * @param	bool XSS cleaning
	 *
	 * @return array
	 */
	public function request_headers($xss_clean = FALSE)
	{
		// Look at Apache go!
		if (function_exists('apache_request_headers'))
		{
			$headers = apache_request_headers();
		}
		else
		{
			$headers['Content-Type'] = (isset($_SERVER['CONTENT_TYPE'])) ? $_SERVER['CONTENT_TYPE'] : @getenv('CONTENT_TYPE');

			foreach ($_SERVER as $key => $val)
			{
				if (strncmp($key, 'HTTP_', 5) === 0)
				{
					$headers[substr($key, 5)] = $this->_fetch_from_array($_SERVER, $key, $xss_clean);
				}
			}
		}

		// take SOME_HEADER and turn it into Some-Header
		foreach ($headers as $key => $val)
		{
			$key = str_replace('_', ' ', strtolower($key));
			$key = str_replace(' ', '-', ucwords($key));

			$this->headers[$key] = $val;
		}

		return $this->headers;
	}

	// --------------------------------------------------------------------

	/**
	 * Get Request Header
	 *
	 * Returns the value of a single member of the headers class member
	 *
	 * @param 	string		array key for $this->headers
	 * @param	boolean		XSS Clean or not
	 * @return 	mixed		FALSE on failure, string on success
	 */
	public function get_request_header($index, $xss_clean = FALSE)
	{
		if (empty($this->headers))
		{
			$this->request_headers();
		}

		if ( ! isset($this->headers[$index]))
		{
			return FALSE;
		}

		if ($xss_clean === TRUE)
		{
			return $this->security->xss_clean($this->headers[$index]);
		}

		return $this->headers[$index];
	}

	// --------------------------------------------------------------------

	/**
	 * Is ajax Request?
	 *
	 * Test to see if a request contains the HTTP_X_REQUESTED_WITH header
	 *
	 * @return 	boolean
	 */
	public function is_ajax_request()
	{
		return ($this->server('HTTP_X_REQUESTED_WITH') === 'XMLHttpRequest');
	}

	// --------------------------------------------------------------------

	/**
	 * Is cli Request?
	 *
	 * Test to see if a request was made from the command line
	 *
	 * @return 	bool
	 */
	public function is_cli_request()
	{
		return (php_sapi_name() === 'cli' OR defined('STDIN'));
	}

	
	
	# kses 0.2.2 - HTML/XHTML filter that only allows some elements and attributes
	# Copyright (C) 2002, 2003, 2005  Ulf Harnhammar
	#
	# This program is free software and open source software; you can redistribute
	# it and/or modify it under the terms of the GNU General Public License as
	# published by the Free Software Foundation; either version 2 of the License,
	# or (at your option) any later version.
	#
	# This program is distributed in the hope that it will be useful, but WITHOUT
	# ANY WARRANTY; without even the implied warranty of MERCHANTABILITY or
	# FITNESS FOR A PARTICULAR PURPOSE.  See the GNU General Public License for
	# more details.
	#
	# You should have received a copy of the GNU General Public License along
	# with this program; if not, write to the Free Software Foundation, Inc.,
	# 59 Temple Place, Suite 330, Boston, MA  02111-1307  USA  or visit
	# http://www.gnu.org/licenses/gpl.html
	#
	# *** CONTACT INFORMATION ***
	#
	# E-mail:      metaur at users dot sourceforge dot net
	# Web page:    http://sourceforge.net/projects/kses
	# Paper mail:  Ulf Harnhammar
	#              Ymergatan 17 C
	#              753 25  Uppsala
	#              SWEDEN
	#
	# [kses strips evil scripts!]
	
	
	public function kses($string, $allowed_html, $allowed_protocols =
				   array('http', 'https', 'ftp', 'news', 'nntp', 'telnet',
						 'gopher', 'mailto'))
	###############################################################################
	# This public function makes sure that only the allowed HTML element names, attribute
	# names and attribute values plus only sane HTML entities will occur in
	# $string. You have to remove any slashes from PHP's magic quotes before you
	# call this function.
	#
	# MODIFIED BY CGS
	# 	placing "false" value for $allowed_protocols bypassing the "whitelisted protocols" checking.
	#	you will usually need to do this to allow css attributes as the input
	###############################################################################
	{
	  $string = $this->formatTextToDb($string); 	
	  $string = $this->kses_no_null($string);
	  $string = $this->kses_js_entities($string);
	  $string = $this->kses_normalize_entities($string);
	  $string = $this->kses_hook($string);
	  $allowed_html_fixed = $this->kses_array_lc($allowed_html);
	  return $this->kses_split($string, $allowed_html_fixed, $allowed_protocols);
	} # public function kses


	function formatTextToDb($varText)
	{
		if(is_array($varText))
			return $varText;
			
		$varText = ltrim($varText);
		
		$varText = str_replace("'", "&quote", $varText);
		$varText = str_replace("\\", "&backslash", $varText);
		
		$varText = str_replace("\\", "", $varText);
		$varText = str_replace("'", "''", $varText);
		
		return $varText;
	}	
	
	public function kses_hook($string)
	###############################################################################
	# You add any kses hooks here.
	###############################################################################
	{
	  return $string;
	} # public function kses_hook
	
	
	public function kses_version()
	###############################################################################
	# This public function returns kses' version number.
	###############################################################################
	{
	  return '0.2.2';
	} # public function kses_version
	
	
	public function kses_split($string, $allowed_html, $allowed_protocols)
	###############################################################################
	# This public function searches for HTML tags, no matter how malformed. It also
	# matches stray ">" characters.
	###############################################################################
	{

	  $var = $this->kses_split2('\\1', $allowed_html, $allowed_protocols);
	  
	  return preg_replace('%(<'.   # EITHER: <
						  '[^>]*'. # things that aren't >
						  '(>|$)'. # > or end of string
						  '|>)%e', # OR: just a >
						  $var,
						  $string);
	} # public function kses_split
	
	
	 function kses_split2($string, $allowed_html, $allowed_protocols)
	###############################################################################
	# This public function does a lot of work. It rejects some very malformed things
	# like <:::>. It returns an empty string, if the element isn't allowed (look
	# ma, no strip_tags()!). Otherwise it splits the tag into an element and an
	# attribute list.
	###############################################################################
	{
	  $string = $this->kses_stripslashes($string);
	
	  if (substr($string, 0, 1) != '<')
		return '&gt;';
		# It matched a ">" character
	
	  if (!preg_match('%^<\s*(/\s*)?([a-zA-Z0-9]+)([^>]*)>?$%', $string, $matches))
		return '';
		# It's seriously malformed
	
	  $slash = trim($matches[1]);
	  $elem = $matches[2];
	  $attrlist = $matches[3];
	
	  if (!@isset($allowed_html[strtolower($elem)]))
		return '';
		# They are using a not allowed HTML element
	
	  if ($slash != '')
		return "<$slash$elem>";
	  # No attributes are allowed for closing elements
	
	  return kses_attr("$slash$elem", $attrlist, $allowed_html,
					   $allowed_protocols);
	} # public function kses_split2
	
	
	public function kses_attr($element, $attr, $allowed_html, $allowed_protocols)
	###############################################################################
	# This public function removes all attributes, if none are allowed for this element.
	# If some are allowed it calls kses_hair() to split them further, and then it
	# builds up new HTML code from the data that kses_hair() returns. It also
	# removes "<" and ">" characters, if there are any left. One more thing it
	# does is to check if the tag has a closing XHTML slash, and if it does,
	# it puts one in the returned code as well.
	###############################################################################
	{
	# Is there a closing XHTML slash at the end of the attributes?
	
	  $xhtml_slash = '';
	  if (preg_match('%\s/\s*$%', $attr))
		$xhtml_slash = ' /';
	
	# Are any attributes allowed at all for this element?
	
	  if (@count($allowed_html[strtolower($element)]) == 0)
		return "<$element$xhtml_slash>";
	
	# Split it
	
	  $attrarr = kses_hair($attr, $allowed_protocols);
	
	# Go through $attrarr, and save the allowed attributes for this element
	# in $attr2
	
	  $attr2 = '';
	
	  foreach ($attrarr as $arreach)
	  {
		if (!@isset($allowed_html[strtolower($element)]
								[strtolower($arreach['name'])]))
		  continue; # the attribute is not allowed
	
		$current = $allowed_html[strtolower($element)]
								[strtolower($arreach['name'])];
	
		if (!is_array($current))
		  $attr2 .= ' '.$arreach['whole'];
		# there are no checks
	
		else
		{
		# there are some checks
		  $ok = true;
		  foreach ($current as $currkey => $currval)
			if (!kses_check_attr_val($arreach['value'], $arreach['vless'],
									 $currkey, $currval))
			{ $ok = false; break; }
	
		  if ($ok)
			$attr2 .= ' '.$arreach['whole']; # it passed them
		} # if !is_array($current)
	  } # foreach
	
	# Remove any "<" or ">" characters
	
	  $attr2 = preg_replace('/[<>]/', '', $attr2);
	
	  return "<$element$attr2$xhtml_slash>";
	} # public function kses_attr
	
	
	public function kses_hair($attr, $allowed_protocols)
	###############################################################################
	# This public function does a lot of work. It parses an attribute list into an array
	# with attribute data, and tries to do the right thing even if it gets weird
	# input. It will add quotes around attribute values that don't have any quotes
	# or apostrophes around them, to make it easier to produce HTML code that will
	# conform to W3C's HTML specification. It will also remove bad URL protocols
	# from attribute values.
	###############################################################################
	{
	  $attrarr = array();
	  $mode = 0;
	  $attrname = '';
	
	# Loop through the whole attribute list
	
	  while (strlen($attr) != 0)
	  {
		$working = 0; # Was the last operation successful?
	
		switch ($mode)
		{
		  case 0: # attribute name, href for instance
	
			if (preg_match('/^([-a-zA-Z]+)/', $attr, $match))
			{
			  $attrname = $match[1];
			  $working = $mode = 1;
			  $attr = preg_replace('/^[-a-zA-Z]+/', '', $attr);
			}
	
			break;
	
		  case 1: # equals sign or valueless ("selected")
	
			if (preg_match('/^\s*=\s*/', $attr)) # equals sign
			{
			  $working = 1; $mode = 2;
			  $attr = preg_replace('/^\s*=\s*/', '', $attr);
			  break;
			}
	
			if (preg_match('/^\s+/', $attr)) # valueless
			{
			  $working = 1; $mode = 0;
			  $attrarr[] = array
							('name'  => $attrname,
							 'value' => '',
							 'whole' => $attrname,
							 'vless' => 'y');
			  $attr = preg_replace('/^\s+/', '', $attr);
			}
	
			break;
	
		  case 2: # attribute value, a URL after href= for instance
	
			if (preg_match('/^"([^"]*)"(\s+|$)/', $attr, $match))
			 # "value"
			{
			  $thisval = kses_bad_protocol($match[1], $allowed_protocols);
	
			  $attrarr[] = array
							('name'  => $attrname,
							 'value' => $thisval,
							 'whole' => "$attrname=\"$thisval\"",
							 'vless' => 'n');
			  $working = 1; $mode = 0;
			  $attr = preg_replace('/^"[^"]*"(\s+|$)/', '', $attr);
			  break;
			}
	
			if (preg_match("/^'([^']*)'(\s+|$)/", $attr, $match))
			 # 'value'
			{
			  $thisval = kses_bad_protocol($match[1], $allowed_protocols);
	
			  $attrarr[] = array
							('name'  => $attrname,
							 'value' => $thisval,
							 'whole' => "$attrname='$thisval'",
							 'vless' => 'n');
			  $working = 1; $mode = 0;
			  $attr = preg_replace("/^'[^']*'(\s+|$)/", '', $attr);
			  break;
			}
	
			if (preg_match("%^([^\s\"']+)(\s+|$)%", $attr, $match))
			 # value
			{
			  $thisval = kses_bad_protocol($match[1], $allowed_protocols);
	
			  $attrarr[] = array
							('name'  => $attrname,
							 'value' => $thisval,
							 'whole' => "$attrname=\"$thisval\"",
							 'vless' => 'n');
							 # We add quotes to conform to W3C's HTML spec.
			  $working = 1; $mode = 0;
			  $attr = preg_replace("%^[^\s\"']+(\s+|$)%", '', $attr);
			}
	
			break;
		} # switch
	
		if ($working == 0) # not well formed, remove and try again
		{
		  $attr = kses_html_error($attr);
		  $mode = 0;
		}
	  } # while
	
	  if ($mode == 1)
	  # special case, for when the attribute list ends with a valueless
	  # attribute like "selected"
		$attrarr[] = array
					  ('name'  => $attrname,
					   'value' => '',
					   'whole' => $attrname,
					   'vless' => 'y');
	
	  return $attrarr;
	} # public function kses_hair
	
	
	public function kses_check_attr_val($value, $vless, $checkname, $checkvalue)
	###############################################################################
	# This public function performs different checks for attribute values. The currently
	# implemented checks are "maxlen", "minlen", "maxval", "minval" and "valueless"
	# with even more checks to come soon.
	###############################################################################
	{
	  $ok = true;
	
	  switch (strtolower($checkname))
	  {
		case 'maxlen':
		# The maxlen check makes sure that the attribute value has a length not
		# greater than the given value. This can be used to avoid Buffer Overflows
		# in WWW clients and various Internet servers.
	
		  if (strlen($value) > $checkvalue)
			$ok = false;
		  break;
	
		case 'minlen':
		# The minlen check makes sure that the attribute value has a length not
		# smaller than the given value.
	
		  if (strlen($value) < $checkvalue)
			$ok = false;
		  break;
	
		case 'maxval':
		# The maxval check does two things: it checks that the attribute value is
		# an integer from 0 and up, without an excessive amount of zeroes or
		# whitespace (to avoid Buffer Overflows). It also checks that the attribute
		# value is not greater than the given value.
		# This check can be used to avoid Denial of Service attacks.
	
		  if (!preg_match('/^\s{0,6}[0-9]{1,6}\s{0,6}$/', $value))
			$ok = false;
		  if ($value > $checkvalue)
			$ok = false;
		  break;
	
		case 'minval':
		# The minval check checks that the attribute value is a positive integer,
		# and that it is not smaller than the given value.
	
		  if (!preg_match('/^\s{0,6}[0-9]{1,6}\s{0,6}$/', $value))
			$ok = false;
		  if ($value < $checkvalue)
			$ok = false;
		  break;
	
		case 'valueless':
		# The valueless check checks if the attribute has a value
		# (like <a href="blah">) or not (<option selected>). If the given value
		# is a "y" or a "Y", the attribute must not have a value.
		# If the given value is an "n" or an "N", the attribute must have one.
	
		  if (strtolower($checkvalue) != $vless)
			$ok = false;
		  break;
	  } # switch
	
	  return $ok;
	} # public function kses_check_attr_val
	
	
	public function kses_bad_protocol($string, $allowed_protocols)
	###############################################################################
	# This public function removes all non-allowed protocols from the beginning of
	# $string. It ignores whitespace and the case of the letters, and it does
	# understand HTML entities. It does its work in a while loop, so it won't be
	# fooled by a string like "javascript:javascript:alert(57)".
	###############################################################################
	{
	  $string = kses_no_null($string);
	  $string = preg_replace('/\xad+/', '', $string); # deals with Opera "feature"
	  $string2 = $string.'a';
	
	  while ($string != $string2)
	  {
		$string2 = $string;
		$string = kses_bad_protocol_once($string, $allowed_protocols);
	  } # while
	
	  return $string;
	} # public function kses_bad_protocol
	
	
	public function kses_no_null($string)
	###############################################################################
	# This public function removes any NULL characters in $string.
	###############################################################################
	{
	  $string = preg_replace('/\0+/', '', $string);
	  $string = preg_replace('/(\\\\0)+/', '', $string);
	
	  return $string;
	} # public function kses_no_null
	
	
	public function kses_stripslashes($string)
	###############################################################################
	# This public function changes the character sequence  \"  to just  "
	# It leaves all other slashes alone. It's really weird, but the quoting from
	# preg_replace(//e) seems to require this.
	###############################################################################
	{
	  return preg_replace('%\\\\"%', '"', $string);
	} # public function kses_stripslashes
	
	
	public function kses_array_lc($inarray)
	###############################################################################
	# This public function goes through an array, and changes the keys to all lower case.
	###############################################################################
	{
	  $outarray = array();
	
	  if(is_array($inarray))
	  {
		  foreach ($inarray as $inkey => $inval)
		  {
			$outkey = strtolower($inkey);
			$outarray[$outkey] = array();
		
			foreach ($inval as $inkey2 => $inval2)
			{
			  $outkey2 = strtolower($inkey2);
			  $outarray[$outkey][$outkey2] = $inval2;
			} # foreach $inval
		  } # foreach $inarray
	  }
	  return $outarray;
	} # public function kses_array_lc
	
	
	public function kses_js_entities($string)
	###############################################################################
	# This public function removes the HTML JavaScript entities found in early versions of
	# Netscape 4.
	###############################################################################
	{
	  return preg_replace('%&\s*\{[^}]*(\}\s*;?|$)%', '', $string);
	} # public function kses_js_entities
	
	
	public function kses_html_error($string)
	###############################################################################
	# This public function deals with parsing errors in kses_hair(). The general plan is
	# to remove everything to and including some whitespace, but it deals with
	# quotes and apostrophes as well.
	###############################################################################
	{
	  return preg_replace('/^("[^"]*("|$)|\'[^\']*(\'|$)|\S)*\s*/', '', $string);
	} # public function kses_html_error
	
	
	public function kses_bad_protocol_once($string, $allowed_protocols)
	###############################################################################
	# This public function searches for URL protocols at the beginning of $string, while
	# handling whitespace and HTML entities.
	###############################################################################
	{
	  return preg_replace('/^((&[^;]*;|[\sA-Za-z0-9])*)'.
						  '(:|&#58;|&#[Xx]3[Aa];)\s*/e',
						  'kses_bad_protocol_once2("\\1", $allowed_protocols)',
						  $string);
	} # public function kses_bad_protocol_once
	
	
	public function kses_bad_protocol_once2($string, $allowed_protocols)
	###############################################################################
	# This public function processes URL protocols, checks to see if they're in the white-
	# list or not, and returns different data depending on the answer.
	###############################################################################
	{
	  $string2 = kses_decode_entities($string);
	  $string2 = preg_replace('/\s/', '', $string2);
	  $string2 = kses_no_null($string2);
	  $string2 = preg_replace('/\xad+/', '', $string2);
	   # deals with Opera "feature"
	  $string2 = strtolower($string2);
	
	  $allowed = false;
	  if(is_array($allowed_protocols))
	  {
		  foreach ($allowed_protocols as $one_protocol)
			if (strtolower($one_protocol) == $string2)
			{
			  $allowed = true;
			  break;
			}
	  }
	  
	  if ($allowed)
		return "$string2:";
	  else
	  {
		if($allowed_protocols == false)
			return "$string2:";
		else
			return '';
	  }
		
	} # public function kses_bad_protocol_once2
	
	
	public function kses_normalize_entities($string)
	###############################################################################
	# This public function normalizes HTML entities. It will convert "AT&T" to the correct
	# "AT&amp;T", "&#00058;" to "&#58;", "&#XYZZY;" to "&amp;#XYZZY;" and so on.
	###############################################################################
	{
	# Disarm all entities by converting & to &amp;
	
	  $string = str_replace('&', '&amp;', $string);
	
	# Change back the allowed entities in our entity whitelist
	
	  $string = preg_replace('/&amp;([A-Za-z][A-Za-z0-9]{0,19});/',
							 '&\\1;', $string);
	  $string = preg_replace('/&amp;#0*([0-9]{1,5});/e',
							 'kses_normalize_entities2("\\1")', $string);
	  $string = preg_replace('/&amp;#([Xx])0*(([0-9A-Fa-f]{2}){1,2});/',
							 '&#\\1\\2;', $string);
	
	  return $string;
	} # public function kses_normalize_entities
	
	
	public function kses_normalize_entities2($i)
	###############################################################################
	# This public function helps kses_normalize_entities() to only accept 16 bit values
	# and nothing more for &#number; entities.
	###############################################################################
	{
	  return (($i > 65535) ? "&amp;#$i;" : "&#$i;");
	} # public function kses_normalize_entities2
	
	
	public function kses_decode_entities($string)
	###############################################################################
	# This public function decodes numeric HTML entities (&#65; and &#x41;). It doesn't
	# do anything with other entities like &auml;, but we don't need them in the
	# URL protocol whitelisting system anyway.
	###############################################################################
	{
	  $string = preg_replace('/&#([0-9]+);/e', 'chr("\\1")', $string);
	  $string = preg_replace('/&#[Xx]([0-9A-Fa-f]+);/e', 'chr(hexdec("\\1"))',
							 $string);
	
	  return $string;
	} # public function kses_decode_entities


}

/* End of file Input.php */
/* Location: ./system/core/Input.php */