import { Injectable } from '@angular/core';
import {InMemoryDbService} from "angular-in-memory-web-api";
@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService implements InMemoryDbService{
  createDb() {

    const posts = [
      {id:0, title: 'Сar for sale', description: 'Excellent car for a student or a budget conscious driver', date: new Date(), showInfo: false},
      {id:1, title: 'House for sale', description: 'With rent prices are going up,now is the best time to buy.Get your home before it is gone!', date: new Date(), showInfo: false},
      {id:2, title: 'Business for sale', description: 'Parking lot nearby,perfect location,many regular clients', date: new Date(), showInfo: false},
      {id:3, title: 'Courses of JS', description: 'In these lessons you will study Js in depth, at the end of the course you will make your pet-project', date: new Date(), showInfo: false},
      {id:4, title: 'Courses of HTML/CSS', description: 'In these lessons you will study HTML/CSS in depth, at the end of the course you will make your own project', date: new Date(), showInfo: false},
      {id:5, title: 'Courses of Angular', description: 'In these lessons you will study Angular in depth, at the end of the course you will make your own project', date: new Date(), showInfo: false},
      {id:6, title: 'Rest in the mountains', description: 'It is the best time to rest with your family in the mountains', date: new Date(), showInfo: false},
      {id:7, title: 'Rest by the sea', description: 'It is the best time to rest with your family by the sea', date: new Date(), showInfo: false},
    ];
    return {posts};
  }
}
