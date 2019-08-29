import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ImageData } from '../model/Image';
import { AuthService } from '../service/auth/auth.service';


@Component({
  selector: 'app-uploadimage',
  templateUrl: './uploadimage.component.html',
  styleUrls: ['./uploadimage.component.css'],
  providers: [AuthService]
})
export class UploadimageComponent implements OnInit {

  constructor(private httpClient: HttpClient, private authService: AuthService, ) { }


  title = 'ImageUploaderFrontEnd';
  public selectedFile;
  public event1;
  imgURL: any;
  receivedImageData: any;
  base64Data: any;
  convertedImage: any;
  id: Number;
  ngOnInit() {
    const session = this.authService.getSession();
    this.id = session.getId();
    console.log(session);
  }

  public onFileChanged(event) {
    console.log(event);
    this.selectedFile = event.target.files[0];

    // Below part is used to display the selected image
    let reader = new FileReader();
    reader.readAsDataURL(event.target.files[0]);
    reader.onload = (event2) => {
      this.imgURL = reader.result;
    };


  }


  // This part is for uploading
  onUpload() {


    const uploadData = new FormData();
    uploadData.append('myFile', this.selectedFile, this.selectedFile.name);


    this.httpClient.post('http://localhost:8083/uploadimage', uploadData,)
      .subscribe(
        res => {
          console.log(res);
          this.receivedImageData = res;
          this.base64Data = this.receivedImageData.pic;
          this.convertedImage = 'data:image/jpeg;base64,' + this.base64Data;
        },
        err => console.log('Error Occured duringng saving: ' + err)
      );


  }
}
