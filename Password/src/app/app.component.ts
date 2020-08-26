import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {//create function that user click on the button
  length = 0;
  password = '';//one property, empty string
  includeLetters = false; //default value
  includeNumbers = false;
  includeSymbols = false;

  onChangeLength(value: string){//whatever user type in is string
    const parsedValue = parseInt(value);//convert string to int
    if(!isNaN(parsedValue)){
      //! is not a number -> isNumber
      this.length = parsedValue;
    }
  }

  onChangeUseLetters(){ //event
    this.includeLetters = !this.includeLetters;
  }

  onChangeUseNumbers(){
    this.includeNumbers = !this.includeNumbers;
  }

  onChangeUseSymbols(){
    this.includeSymbols = !this.includeSymbols;
  }

  onButtonClick(){
    const numbers = '1234567890';
    const letters = 'abcdefghijklmnopqrstuvwxyz';
    const symbols = '!@#$%^&*()';

    let validChars = '';
    if(this.includeLetters) {
      validChars += letters;
    }

    if(this.includeNumbers) {
      validChars += numbers;
    }

    if(this.includeSymbols) {
      validChars += symbols;
    }

    let generatedPw = '';
    for(let i = 0; i < this.length; i++){
      const index = Math.floor(Math.random() * validChars.length);
      generatedPw += validChars[index];
    }
    
    this.password = generatedPw;

    /*
    console.log(`
        To generate the password with the following:
        Includes letters: ${this.includeLetters}
        Includes numbers: ${this.includeNumbers}
        Includes symbols: ${this.includeSymbols}
    `);
    
    this.password = 'My Password!!';//call this function and update the password propert
    */
  }
}
