<template>
<section class="position-absolute top-50 start-50 translate-middle">
    <div class="card shadow-lg p-3 mb-5 bg-body-tertiary rounded-4" style="width: 45rem;">
        <div class="card-body">
            <div class="mb-3 row">
    <label for="staticEmail" class="col-sm-3 col-form-label">Email</label>
    <div class="col-sm-9">
      <input type="email" class="form-control" id="staticEmail">
    </div>
  </div>
  <div class="mb-3 row">
    <label for="inputPassword" class="col-sm-3 col-form-label">Vezetéknév</label>
    <div class="col-sm-9">
      <input type="text" class="form-control" id="inputPassword">
    </div>
  </div>
  <div class="mb-3 row">
    <label for="inputPassword" class="col-sm-3 col-form-label">Keresztnév</label>
    <div class="col-sm-9">
      <input type="text" class="form-control" id="inputPassword">
    </div>
  </div>
  <div class="mb-3 row">
    <label for="inputPassword" class="col-sm-3 col-form-label">Jelszó</label>
    <div class="col-sm-9">
      <input type="password" class="form-control" id="inputPassword">
    </div>
  </div>
  <div class="mb-3 row">
    <label for="inputPassword" class="col-sm-3 col-form-label ">Jelszó mégegyszer</label>
    <div class="col-sm-9">
      <input type="password" class="form-control" id="inputPassword">
    </div>
  </div>
  <div class="col-auto">
    <button type="submit" id="reggomb" class="btn btn-primary mb-3">Regisztráció</button>
  </div>
        </div>
    </div>
</section>
</template>
<script>

</script>
<style>
#reggomb {
    width: 100%;
    background-color: slateblue;
 }
</style>