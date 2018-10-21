import { NgModule } from '@angular/core';
import { SpinningCubeModule } from '../../components/spinning-cube/spinning-cube.module';
import { HomePage } from './home';


@NgModule({
  declarations: [HomePage],
	imports: [SpinningCubeModule],
	exports: [HomePage]
})
export class HomePageModule {

}
