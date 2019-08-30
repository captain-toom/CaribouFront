import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ImageData } from '../model/Image';
import { AuthService } from '../service/auth/auth.service';
import { ImJo } from '../model/ImJo';
import { Client } from '../model/Client';


@Component({
  selector: 'app-uploadimage',
  templateUrl: './uploadimage.component.html',
  styleUrls: ['./uploadimage.component.css'],
  providers: [AuthService]
})
export class UploadimageComponent implements OnInit {

  constructor(private httpClient: HttpClient, private authService: AuthService) { }
  im: ImageData = new ImageData();
  ImageData: ImageData = new ImageData();
  Imj: ImJo = new ImJo();
  title = 'ImageUploaderFrontEnd';
  public selectedFile;
  public event1;
  imgURL: any;
  ok;
  receivedImageData: any;
  base64Data: any;
  convertedImage: any;
  id: number;
  ngOnInit() {
    const session = this.authService.getSession();
    this.id = session.id;
    console.log(session);

  }
  public onFileChanged(event) {
    console.log(event);
    this.selectedFile = event.target.files[0];

    // Below part is used to display the selected image
    const reader = new FileReader();
    reader.readAsDataURL(event.target.files[0]);

    reader.onload = (event2) => {
      this.imgURL = reader.result;
      this.ok = reader.result;
    };


  }


  // This part is for uploading
  onUpload() {


    /*const uploadData = new FormData();
    uploadData.append('myFile', this.selectedFile, this.selectedFile.name);
    this.Imj.up = uploadData;
    console.log('IMJO yjty' + JSON.stringify(uploadData));
    console.log('IMJO' + this.Imj);
    console.log('voir id ', this.id);*/


    //  this.receivedImageData = this.im.pic;
    //  this.base64Data = this.receivedImageData.pic;
    //  this.convertedImage = 'data:image/jpeg;base64,' + this.im.pic;

    console.log('bin string ' , this.ok);



    console.log('file ' , this.selectedFile);

    console.log('voir pic bto ', window.btoa(this.ok));

    const cl: Client = new Client();
    cl.id = this.id;




    this.im.name = this.selectedFile.name;
    this.im.type = this.selectedFile.type;
    this.im.pic = window.btoa(this.ok);
    this.im.client = cl;

    console.log('voir im client', this.im);

    this.httpClient.post('http://localhost:8083/addimage', this.im)
      .subscribe(
        res => {
          console.log(res);
          /* this.receivedImageData = res;
           this.base64Data = this.receivedImageData.pic;
           this.convertedImage = 'data:image/jpeg;base64,' + this.base64Data;*/
        },
        err => console.log(err)
      );


      }
}
