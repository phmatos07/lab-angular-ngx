import { Injectable } from "@angular/core";
import { SwUpdate, VersionEvent } from "@angular/service-worker";
import { EventTypeSw } from "../models/event-type-sw.enum";

@Injectable()
export class LogUpdateService {

  constructor(updates: SwUpdate) {
    updates.versionUpdates
      .subscribe((event: VersionEvent) => {
        switch (event.type) {
          case EventTypeSw.VERSION_DETECTED:
            console.log(`Baixando a nova versão do aplicativo: ${event.version.hash}`);
            break;
          case EventTypeSw.VERSION_READY:
            console.log(`Versão atual do aplicativo: ${event.currentVersion.hash}`);
            console.log(`Nova versão do app pronta para uso: ${event.latestVersion.hash}`);
            break;
          case EventTypeSw.VERSION_INSTALLATION_FAILED:
            console.log(`Falha ao instalar a versão do aplicativo '${event.version.hash}': ${event.error}`);
            break;
        }
      });
  }
}
