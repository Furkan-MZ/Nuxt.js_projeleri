export default defineNuxtRouteMiddleware((to) => {
  const isAdmin = localStorage.getItem('isAdmin');
  if (!isAdmin && to.path.startsWith('/admin')) {
    return navigateTo('/admin/login'); // Girişe yönlendir
  }
});