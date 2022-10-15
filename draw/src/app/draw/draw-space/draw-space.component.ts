import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { fabric } from 'fabric';

@Component({
  selector: 'app-draw-space',
  templateUrl: './draw-space.component.html',
  styleUrls: ['./draw-space.component.scss']
})
export class DrawSpaceComponent implements OnInit {

  @ViewChild('drawSpace') canvasRef!: ElementRef;

  private _canvasFab?: fabric.Canvas;

  constructor() { }

  ngOnInit(): void {
    this._canvasFab = new fabric.Canvas("draw-space" , {
      backgroundColor: "#ebebef",
      selection: false,
      preserveObjectStacking: true,
      width: 800,
      height: 600
    });
    this._canvasFab.isDrawingMode = true;
  }

}
