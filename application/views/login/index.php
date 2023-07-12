<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8" />
  <title></title>
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

  <!-- icons -->
  <link href="css/icons.min.css" rel="stylesheet" type="text/css" />

</head>

<body class="loading auth-fluid-pages pb-0">

  <div class="auth-fluid">
    <!--Auth fluid left content -->
    <div class="auth-fluid-form-box">
      <div class="align-items-center d-flex h-100">
        <div class="card-body">

          <!-- Logo -->
          <div class="auth-brand text-center text-lg-start">
            <div class="auth-logo">
              <a href="main" class="logo logo-dark text-center">
                <span class="logo-lg">
                  <i class="fas fa-home"></i> Beranda
                </span>
              </a>

              <a href="main" class="logo logo-light text-center">
                <span class="logo-lg">
                  <i class="fas fa-home"></i> Beranda
                </span>
              </a>
            </div>
          </div>

          <!-- title-->
          <h4 class="mt-0">Log In</h4>
          <p class="text-muted mb-4">Selamat datang, silahkan masukkan email dan password Anda untuk mengakses sistem.</p>

          <!-- form -->
          <form class="needs-validation" novalidate method="post" action="login/action">
            <div class="mb-3">
              <label for="emailaddress" class="form-label">Email</label>
              <input class="form-control" type="email" name="reqEmail" id="emailaddress" required placeholder="Masukkan email anda">
            </div>
            <div class="mb-3">
              <a href="auth-recoverpw-2.html" class="text-muted float-end"><small>Lupa password?</small></a>
              <label for="password" class="form-label">Password</label>
              <div class="input-group input-group-merge">
                <input class="form-control" type="password" name="reqPassword" id="password" required placeholder="Masukkan password">
                <div class="input-group-text" data-password="false">
                  <span class="password-eye"></span>
                </div>
              </div>
            </div>

            <div class="alert alert-danger" role="alert" <?if($pesan == ""){?> style="display:none" <?}?>>
              <i class="mdi mdi-block-helper me-2"></i> <?=$pesan?>
            </div>

            <div class="text-white d-grid">
              <button class="btn btn-primary" type="submit">Log In</button>
            </div>
          </form>

          <p class="text-muted mt-5">Copyright &copy; <?=date("Y")?>. Gilang Romy Lesmana</p>
          <!-- end form-->

        </div> <!-- end .card-body -->
      </div> <!-- end .align-items-center.d-flex.h-100-->
    </div>
    <!-- end auth-fluid-form-box-->

  </div>
  <!-- end auth-fluid-->

  <!-- Vendor js -->
  <script src="js/vendor.min.js"></script>

  <!-- App js -->
  <script src="js/app.min.js"></script>

</body>
</html>