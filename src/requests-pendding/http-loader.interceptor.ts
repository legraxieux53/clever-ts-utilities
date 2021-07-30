// import {Injectable} from "@angular/core";
// import {
//   HttpEvent,
//   HttpEventType,
//   HttpHandler,
//   HttpInterceptor,
//   HttpRequest
// } from "@angular/common/http";
// import {Observable} from "rxjs";
// import {HttpRequestPendingService} from "./http-request-pending.service";
// import {HttpRequestPenddingCaretakerService} from "./http-request-pendding-caretaker.service";
// import {tap} from "rxjs/operators";

// @Injectable()
// export class HttpLoaderInterceptor implements HttpInterceptor {
//   private requestCareTeker: HttpRequestPenddingCaretakerService;
//   private requestPending: HttpRequestPendingService;

//   constructor() {
//     this.requestPending = new HttpRequestPendingService();
//     this.requestCareTeker = new HttpRequestPenddingCaretakerService();
//     this.requestCareTeker.add(this.requestPending.saveState())
//   }

//   intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
//     return next.handle(req)
//     .pipe(
//       tap(event => {
//         switch (event.type) {
//           case HttpEventType.Sent:
//             const state: string = req.url
//             this.requestPending.setState(state)
//             this.requestCareTeker.add(this.requestPending.saveState())
//             break;

//           default:
//             this.decrementState()
//         }
//       }, err => {
//         this.decrementState()
//       })
//     )
//   }

//   private decrementState() {
//     this.requestCareTeker.undo()
//   }

// }
