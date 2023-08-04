import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent {
  title = 'NSX Advanced Load Balancer Tools';

  public responseMessage: string = '';

  constructor(private http: HttpClient) {}

  async handleClick() {
    try {
      const response = await this.http.get<string>('/api/button-click').toPromise();
      this.responseMessage = response || '';
    } catch (error) {
      console.error('Error:', error);
      this.responseMessage = 'Error occurred while fetching data.';
    }
  }
}
