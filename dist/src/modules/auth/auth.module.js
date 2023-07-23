"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthModule = void 0;
const common_1 = require("@nestjs/common");
const auth_service_1 = require("./auth.service");
const auth_controller_1 = require("./auth.controller");
const mongoose_1 = require("@nestjs/mongoose");
const user_schema_1 = require("../../models/schemas/user.schema");
const jwt_1 = require("@nestjs/jwt");
const jwt_strategy_1 = require("./jwt-strategy");
const utils_module_1 = require("../utils/utils.module");
let AuthModule = class AuthModule {
};
AuthModule = __decorate([
    (0, common_1.Module)({
        providers: [auth_service_1.AuthService, jwt_strategy_1.JwtStrategy],
        controllers: [auth_controller_1.AuthController],
        imports: [
            mongoose_1.MongooseModule.forFeature([{ name: 'users', schema: user_schema_1.UserSchema }]),
            jwt_1.JwtModule.register({ secret: 'no-rubrics?' }),
            utils_module_1.UtilsModule,
        ],
    })
], AuthModule);
exports.AuthModule = AuthModule;
//# sourceMappingURL=auth.module.js.map