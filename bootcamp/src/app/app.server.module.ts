import { NgModule } from "@angular/core";
import {
    ServerModule,
    ServerTransferStateModule
} from "@angular/platform-server";

import { AppModule } from "./app.module";
import { AppComponent } from "./app.component";

@NgModule({
    imports: [
        // The AppServerModule should import your AppModule followed
        // by the ServerModule from @angular/platform-server.
        AppModule,
        ServerModule,
        ServerTransferStateModule
        // ModuleMapLoaderModule // <-- *Important* to have lazy-loaded routes work
    ],
    bootstrap: [AppComponent]
})
export class AppServerModule {}
