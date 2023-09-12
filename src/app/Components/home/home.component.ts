import { Component,ViewChild,ElementRef} from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  name: string = '';
  email: string = '';
  selectedFile: File | null = null;

  @ViewChild('fileInput') fileInput!: ElementRef;

  constructor() {}

  onFileChange(event: any) {
    const files: FileList = event.target.files;
    if (files.length > 0) {
      this.selectedFile = files[0];
    } else {
      this.selectedFile = null;
    }
  }

  uploadFile() {
    if (!this.selectedFile) {
      console.error('No file selected.');
      return;
    }

    // Perform file upload logic here (e.g., send the file to a server)

    // Reset the file input
    if (this.fileInput) {
      this.fileInput.nativeElement.value = '';
    }

    // Optionally, reset the form fields
    this.name = '';
    this.email = '';

    console.log('File uploaded:', this.selectedFile);
  }

}
