import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { QuillEditorComponent } from 'ngx-quill';

@Component({
  selector: 'app-writing-page',
  templateUrl: './writing-page.component.html',
  styleUrl: './writing-page.component.scss'
})
export class WritingPageComponent implements AfterViewInit{

  @ViewChild('textEditor') textEditor!: QuillEditorComponent;
  editorContent!: string;

  ngAfterViewInit() {
    console.log(this.textEditor);
  }


  onEditorContentChanged(event: any): void {
    this.editorContent = event.html;
  }

  sendContent(): void {
    console.log('Sending content:', this.editorContent);
  }


  
}
