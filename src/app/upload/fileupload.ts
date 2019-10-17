export class FileUpload {

  $key: string;
  name: string;
  url: string;
  url1: string;
  file: File;

  constructor(file: File) {
    this.file = file;
  }
}
