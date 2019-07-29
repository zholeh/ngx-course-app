import { AuthEffects } from './auth.effects';
import { ProductsEffects } from './products.effects';
import { RouterEffects } from "@store/effects/router.effects";

// tslint:disable-next-line: typedef
export const effects = [AuthEffects, ProductsEffects, RouterEffects];
