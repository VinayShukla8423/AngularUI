import { ApplicationConfig, provideBrowserGlobalErrorListeners } from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideHttpClient, withInterceptors } from '@angular/common/http';
import { routes } from './app.routes';
import { provideClientHydration, withEventReplay } from '@angular/platform-browser';
import { authInterceptor } from './auth-interceptor';
// C:\Users\Nicsi\Desktop\Harshvardhan\Angular\CleanArch\clean-arch-ui\src\app\auth-interceptor.ts
export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),

    // ✅ interceptor correctly attached
    provideHttpClient(withInterceptors([authInterceptor])),

    provideRouter(routes)
    // provideClientHydration(withEventReplay())
  ]
};