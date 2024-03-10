import {
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
} from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  intercept(req: HttpRequest<any>, next: HttpHandler) {
    const authReq = req.clone({
      headers: req.headers.set(
        'Authorization',
        'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxIiwibG9naW4iOiJ0ZXN0X2JhbmtfY2xpZW50IiwiYWNjb3VudF90eXBlIjoic2VydmljZSIsImNsaWVudF9pZCI6ImZyb250IiwibmJmIjoxNzA5OTgzMDY0LCJleHAiOjE3MTc3NTkwNjQsImlhdCI6MTcwOTk4MzA2NCwiaXNzIjoiaW4tZHVjay10b3IiLCJhdWQiOiJpbi1kdWNrLXRvciJ9.',
      ),
    });

    return next.handle(authReq);
  }
}
