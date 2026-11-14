import { loadRemoteModule } from '@angular-architects/native-federation';
import { NgComponentOutlet } from '@angular/common';
import { ChangeDetectionStrategy, Component, OnInit, signal, Type } from '@angular/core';
import { REMOTE_NAME } from '../../models/default-data.const';

@Component({
    imports: [NgComponentOutlet],
    selector: 'remote',
    templateUrl: './remote.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RemoteComponent implements OnInit {

    tableComponent = signal<Type<unknown> | null>(null);
    titulo = signal<string>('Shell: Componente Remoto');

    async ngOnInit(): Promise<void> {
        const m = await loadRemoteModule(REMOTE_NAME, './TableComponent');
        this.tableComponent.set(m.TableComponent);
    }
}