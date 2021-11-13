/*
 * Copyright (c) 2014, Yahoo Inc. All rights reserved.
 * Copyrights licensed under the New BSD License.
 * See the accompanying LICENSE file for terms.
 */

import ExpressHandlebars from "./express-handlebars";
import type {
	ConfigOptions,
	Engine,
} from "../types";

export * from "../types";
export { ExpressHandlebars };

export function create (config: ConfigOptions = {}): ExpressHandlebars {
	return new ExpressHandlebars(config);
}

export default function exphbs (config: ConfigOptions = {}): Engine {
	return create(config).engine;
}
exphbs.create = create;
exphbs.ExpressHandlebars = ExpressHandlebars;
