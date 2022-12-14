import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Music } from 'src/app/model/musicmodel';
import { MusicService } from 'src/app/service/music.service';
import { MusicdialogComponent } from '../musicdialog/musicdialog.component';

@Component({
  selector: 'app-music',
  templateUrl: './music.component.html',
  styleUrls: ['./music.component.css']
})
export class MusicComponent implements OnInit {

constructor(private musicService: MusicService,public dialog: MatDialog){}

  musicas!:Music[]

  ngOnInit(): void {
      this.musicService.getmusic().subscribe((data:Music[])=>{
      this.musicas=data
      console.log(this.musicas)      
      })
  }

  deletemusic(musicaid:Music):void {
    this.musicService.deletemusic(musicaid.id as string).subscribe(()=>{
      this.musicas=this.musicas.filter((id)=>id.id!==musicaid.id)
    })
  }





  openDialog(music: Music | null): void {
    const dialogRef = this.dialog.open(MusicdialogComponent, {
      width: '250px',
      data:
        music === null
          ? {
            title: '',
            artist: '',
            link: '',
          }
          : {
            id: music.id,
            title: music.title,
            artist: music.artist,
            link: music.link,


          },
    });

    dialogRef.afterClosed().subscribe((result) => {
      this.musicService.musicsave(result).subscribe({
        next: (a) => {
          this.musicas.push(a)
         

        
        }
      })
    })

  }
}
