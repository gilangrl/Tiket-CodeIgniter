<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="utf-8" />
    <title>TRAINESIA | Pemesan Tiket by Gilang Romy Lesmana</title>
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta content="A fully featured admin theme which can be used to build CRM, CMS, etc." name="description" />
    <meta content="Coderthemes" name="author" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <base href="<?=base_url()?>"/>
    <!-- App favicon -->
    <link rel="shortcut icon" href="images/favicon.ico">

    <!-- App css -->
    <link href="css/config/default/bootstrap.min.css" rel="stylesheet" type="text/css" id="bs-default-stylesheet" />
    <link href="css/config/default/app.min.css" rel="stylesheet" type="text/css" id="app-default-stylesheet" />

    <link href="css/config/default/bootstrap-dark.min.css" rel="stylesheet" type="text/css" id="bs-dark-stylesheet" />
    <link href="css/config/default/app-dark.min.css" rel="stylesheet" type="text/css" id="app-dark-stylesheet" />

    <!-- third party css -->
    <link href="libraries/bootstrap-table/bootstrap-table.min.css" rel="stylesheet" type="text/css" />
    <!-- third party css end -->

    <!-- icons -->
    <link href="css/icons.min.css" rel="stylesheet" type="text/css" />

</head>

<!-- body start -->
<body class="loading" data-layout='{"mode": "light", "width": "fluid", "menuPosition": "fixed", "sidebar": { "color": "light", "size": "default", "showuser": false}, "topbar": {"color": "dark"}, "showRightSidebarOnPageLoad": true}'>

    <!-- Begin page -->
    <div id="wrapper">
        <!-- Topbar Start -->
        <div class="navbar-custom">
            <div class="container-fluid">
                <ul class="list-unstyled topnav-menu float-end mb-0">
                    <li class="d-none d-lg-block">
                        <form class="app-search">
                            <div class="app-search-box dropdown">
                                <div class="input-group">
                                    <input type="search" class="form-control" placeholder="Search..." id="top-search">
                                    <button class="btn input-group-text" type="submit">
                                        <i class="fe-search"></i>
                                    </button>
                                </div>
                            </div>
                        </form>
                    </li>

                    <li class="dropdown d-inline-block d-lg-none">
                        <a class="nav-link dropdown-toggle arrow-none waves-effect waves-light" data-bs-toggle="dropdown" href="#" role="button" aria-haspopup="false" aria-expanded="false">
                            <i class="fe-search noti-icon"></i>
                        </a>
                        <div class="dropdown-menu dropdown-lg dropdown-menu-end p-0">
                            <form class="p-3">
                                <input type="text" class="form-control" placeholder="Search ..." aria-label="Recipient's username">
                            </form>
                        </div>
                    </li>

                    <li class="dropdown d-none d-lg-inline-block">
                        <a class="nav-link dropdown-toggle arrow-none waves-effect waves-light" data-toggle="fullscreen" href="#">
                            <i class="fe-maximize noti-icon"></i>
                        </a>
                    </li>

                    <li class="dropdown notification-list topbar-dropdown" style="display:none">
                        <a class="nav-link dropdown-toggle waves-effect waves-light" data-bs-toggle="dropdown" href="#" role="button" aria-haspopup="false" aria-expanded="false">
                            <i class="fe-bell noti-icon"></i>
                            <span class="badge bg-danger rounded-circle noti-icon-badge">9</span>
                        </a>
                        <div class="dropdown-menu dropdown-menu-end dropdown-lg">
                            <div class="dropdown-item noti-title">
                                <h5 class="m-0">
                                    <span class="float-end">
                                        <a href="" class="text-dark">
                                            <small>Clear All</small>
                                        </a>
                                    </span>Notification
                                </h5>
                            </div>

                            <div class="noti-scroll" data-simplebar>

                                <a href="javascript:void(0);" class="dropdown-item notify-item">
                                    <div class="notify-icon bg-primary">
                                        <i class="mdi mdi-comment-account-outline"></i>
                                    </div>
                                    <p class="notify-details">Caleb Flakelar commented on Admin
                                        <small class="text-muted">1 min ago</small>
                                    </p>
                                </a>
                            </div>

                            <a href="javascript:void(0);" class="dropdown-item text-center text-primary notify-item notify-all">
                                View all <i class="fe-arrow-right"></i>
                            </a>
                        </div>
                    </li>

                    <a class="nav-link dropdown-toggle nav-user me-0 waves-effect waves-light" data-bs-toggle="dropdown" href="#" role="button" aria-haspopup="false" aria-expanded="false">
                        <img src="images/users/user-1.jpg" alt="user-image" class="rounded-circle">
                        <span class="pro-user-name ms-1">
                            <?=$this->NAMA?> <i class="mdi mdi-chevron-down"></i> 
                        </span>
                    </a>
                    <div class="dropdown-menu dropdown-menu-end profile-dropdown ">
                        <div class="dropdown-header noti-title">
                            <h6 class="text-overflow m-0">Selamat Datang!</h6>
                        </div>
                        <a href="app/index/ubah_password" class="dropdown-item notify-item">
                            <i class="fe-settings"></i>
                            <span>Ubah Password</span>
                        </a>
                        <a href="login/logout" class="dropdown-item notify-item">
                            <i class="fe-log-out"></i>
                            <span>Logout</span>
                        </a>
                    </div>
                </ul>

                <!-- LOGO -->
                <div class="logo-box">
                    <a href="app/index" class="logo logo-dark text-center">
                        <span class="logo-sm">
                            <img src="images/logo.png" alt="" height="50">
                            <!-- <span class="logo-lg-text-light">UBold</span> -->
                        </span>
                        <span class="logo-lg">
                            <img src="images/logo.png" alt="" height="50">
                            <!-- <span class="logo-lg-text-light">U</span> -->
                        </span>
                    </a>

                    <a href="app/index" class="logo logo-light text-center">
                        <span class="logo-sm">
                            <img src="images/logo.png" alt="" height="50">
                        </span>
                        <span class="logo-lg">
                            <img src="images/logo.png" alt="" height="50">
                        </span>
                    </a>
                </div>

                <ul class="list-unstyled topnav-menu topnav-menu-left m-0">
                    <li>
                        <button class="button-menu-mobile waves-effect waves-light">
                            <i class="fe-menu"></i>
                        </button>
                    </li>

                    <li>
                        <!-- Mobile menu toggle (Horizontal Layout)-->
                        <a class="navbar-toggle nav-link" data-bs-toggle="collapse" data-bs-target="#topnav-menu-content">
                            <div class="lines">
                                <span></span>
                                <span></span>
                                <span></span>
                            </div>
                        </a>
                        <!-- End mobile menu toggle-->
                    </li>   
                </ul>
                <div class="clearfix"></div>
            </div>
        </div>
        <!-- end Topbar -->

        <!-- ========== Left Sidebar Start ========== -->
        <div class="left-side-menu">

            <div class="h-100" data-simplebar>
                <!--- Sidemenu -->
                <div id="sidebar-menu">
                    <ul id="side-menu">
                        <li>
                            <a href="#sidebarPengaturan" data-bs-toggle="collapse">
                                <i class="fa fa-database"></i>
                                <span>Pengaturan</span>
                                <span class="menu-arrow"></span>
                            </a>
                            <div class="collapse" id="sidebarPengaturan">
                                <ul class="nav-second-level">
                                    <li><a href="app/index/user_login">User Login</a></li>
                                    <li><a href="app/index/kereta">Kereta</a></li>
                                    <li><a href="app/index/stasiun">Stasiun</a></li>
                                    <li><a href="app/index/jadwal">Jadwal Kereta</a></li>
                                </ul>
                            </div>
                            
                        </li>      
                    </ul>
                </div> 

                <div class="clearfix"></div>
            </div>
            <!-- Sidebar -left -->
        </div>

        <div class="content-page">
            <div class="content">
                <div class="container-fluid">
                    <?=($content ? $content : '')?>
                </div>
            </div>
        </div>
    </div>
    <!-- END wrapper -->


    <!-- Vendor js -->
    <script src="js/vendor.min.js"></script>

    <!-- third party js -->
    <script src="libraries/bootstrap-table/bootstrap-table.min.js"></script>
    <!-- third party js ends -->

    <!-- Datatables init -->
    <script src="js/pages/bootstrap-tables.init.js"></script>

    <!-- App js -->
    <script src="js/app.min.js"></script>

    <!-- EASYUI -->
    <link rel="stylesheet" type="text/css" href="libraries/easyui/themes/default/easyui.css">
    <script type="text/javascript" src="libraries/easyui/jquery.easyui.min.js"></script>
    <script type="text/javascript" src="libraries/easyui/kalender-easyui.js"></script>
    <script type="text/javascript" src="libraries/easyui/globalfunction.js"></script>
</body>
</html>