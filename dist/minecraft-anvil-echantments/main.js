(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _models_enchanted_book__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./models/enchanted.book */ "./src/app/models/enchanted.book.ts");
/* harmony import */ var _db_enchants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./db/enchants */ "./src/app/db/enchants.ts");
/* harmony import */ var _utils_costUtils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./utils/costUtils */ "./src/app/utils/costUtils.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _components_enchanted_book_enchanted_book_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/enchanted-book/enchanted-book.component */ "./src/app/components/enchanted-book/enchanted-book.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");








function AppComponent_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "app-enchanted-book", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("addEnchant", function AppComponent_ng_container_2_Template_app_enchanted_book_addEnchant_2_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r6); const i_r4 = ctx.index; const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r5.addEnchant(i_r4, $event); })("removeEnchant", function AppComponent_ng_container_2_Template_app_enchanted_book_removeEnchant_2_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r6); const i_r4 = ctx.index; const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r7.removeEnchant(i_r4, $event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "+");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const enchantElement_r3 = ctx.$implicit;
    const i_r4 = ctx.index;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("enchant", enchantElement_r3)("conflictEnchantTypes", ctx_r0.conflictEnchantTypes[i_r4]);
} }
function AppComponent_div_7_Template(rf, ctx) { if (rf & 1) {
    const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "button", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AppComponent_div_7_Template_button_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r9); const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r8.removeElement(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r1.removeBookLiteral);
} }
function AppComponent_div_8_option_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "option", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const enchantype_r11 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", enchantype_r11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", enchantype_r11, "");
} }
function AppComponent_div_8_Template(rf, ctx) { if (rf & 1) {
    const _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "select", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function AppComponent_div_8_Template_select_ngModelChange_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r13); const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r12.currentSelectedType = $event; })("ngModelChange", function AppComponent_div_8_Template_select_ngModelChange_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r13); const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r14.enchantTypeChange(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, AppComponent_div_8_option_2_Template, 2, 2, "option", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r2.currentSelectedType);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r2.enchantTypes);
} }
class AppComponent {
    constructor() {
        this.title = 'minecraft-anvil-echantments';
        this.cache = new Map();
        this.enchantList = _db_enchants__WEBPACK_IMPORTED_MODULE_2__["ENCHANT_LIST"];
        this.conflictList = _db_enchants__WEBPACK_IMPORTED_MODULE_2__["CONFLICT_ENCHANT"];
        this.enchantAppliable = _db_enchants__WEBPACK_IMPORTED_MODULE_2__["APPLICABLE_ENCHANT"];
        this.enchantTypes = _db_enchants__WEBPACK_IMPORTED_MODULE_2__["ENCHANT_TYPES"].filter(el => el != _models_enchanted_book__WEBPACK_IMPORTED_MODULE_1__["EnchantableType"].Book);
        this.totalForges = 0;
        this.totalCalculus = 0;
        this.foundInCache = 0;
        this.totalValidPermutations = 0;
        this.totalInvalidPermutations = 0;
        this.conflictEnchantTypes = [
            [_models_enchanted_book__WEBPACK_IMPORTED_MODULE_1__["EnchantType"].Protection, _models_enchanted_book__WEBPACK_IMPORTED_MODULE_1__["EnchantType"].Mending, _models_enchanted_book__WEBPACK_IMPORTED_MODULE_1__["EnchantType"].Unbreaking, _models_enchanted_book__WEBPACK_IMPORTED_MODULE_1__["EnchantType"].Thorns],
            [_models_enchanted_book__WEBPACK_IMPORTED_MODULE_1__["EnchantType"].Mending, _models_enchanted_book__WEBPACK_IMPORTED_MODULE_1__["EnchantType"].Unbreaking, _models_enchanted_book__WEBPACK_IMPORTED_MODULE_1__["EnchantType"].Thorns],
            [_models_enchanted_book__WEBPACK_IMPORTED_MODULE_1__["EnchantType"].Protection, _models_enchanted_book__WEBPACK_IMPORTED_MODULE_1__["EnchantType"].Unbreaking, _models_enchanted_book__WEBPACK_IMPORTED_MODULE_1__["EnchantType"].Thorns],
            [_models_enchanted_book__WEBPACK_IMPORTED_MODULE_1__["EnchantType"].Protection, _models_enchanted_book__WEBPACK_IMPORTED_MODULE_1__["EnchantType"].Mending, _models_enchanted_book__WEBPACK_IMPORTED_MODULE_1__["EnchantType"].Thorns],
            [_models_enchanted_book__WEBPACK_IMPORTED_MODULE_1__["EnchantType"].Protection, _models_enchanted_book__WEBPACK_IMPORTED_MODULE_1__["EnchantType"].Mending, _models_enchanted_book__WEBPACK_IMPORTED_MODULE_1__["EnchantType"].Unbreaking]
        ];
        this.resultsBrief = new Map();
        this.enchantsPerfectHelmetElements = [
            {
                enchants: [{
                        type: _models_enchanted_book__WEBPACK_IMPORTED_MODULE_1__["EnchantType"].Protection,
                        level: 4,
                        max: 4,
                        mulBook: 1,
                        mulItem: 1
                    }
                ],
                isEnchanted: true,
                penalty: 0,
                type: _models_enchanted_book__WEBPACK_IMPORTED_MODULE_1__["EnchantableType"].Book
            },
            {
                enchants: [{
                        type: _models_enchanted_book__WEBPACK_IMPORTED_MODULE_1__["EnchantType"].Mending,
                        max: 1,
                        level: 1,
                        mulItem: 4,
                        mulBook: 2
                    }
                ],
                isEnchanted: true,
                penalty: 0,
                type: _models_enchanted_book__WEBPACK_IMPORTED_MODULE_1__["EnchantableType"].Book
            },
            {
                enchants: [
                    {
                        type: _models_enchanted_book__WEBPACK_IMPORTED_MODULE_1__["EnchantType"].Unbreaking,
                        max: 3,
                        level: 3,
                        mulItem: 2,
                        mulBook: 1
                    }
                ],
                isEnchanted: true,
                penalty: 0,
                type: _models_enchanted_book__WEBPACK_IMPORTED_MODULE_1__["EnchantableType"].Book
            },
            {
                enchants: [
                    {
                        type: _models_enchanted_book__WEBPACK_IMPORTED_MODULE_1__["EnchantType"].Thorns,
                        level: 3,
                        max: 3,
                        mulItem: 8,
                        mulBook: 4
                    },
                ],
                isEnchanted: true,
                penalty: 0,
                type: _models_enchanted_book__WEBPACK_IMPORTED_MODULE_1__["EnchantableType"].Book
            },
            {
                enchants: [
                    {
                        type: _models_enchanted_book__WEBPACK_IMPORTED_MODULE_1__["EnchantType"].Aqua_Affinity,
                        max: 1,
                        level: 1,
                        mulItem: 4,
                        mulBook: 2
                    },
                ],
                isEnchanted: true,
                penalty: 0,
                type: _models_enchanted_book__WEBPACK_IMPORTED_MODULE_1__["EnchantableType"].Book
            },
            {
                enchants: [
                    {
                        type: _models_enchanted_book__WEBPACK_IMPORTED_MODULE_1__["EnchantType"].Respiration,
                        max: 3,
                        level: 3,
                        mulItem: 4,
                        mulBook: 2
                    },
                ],
                isEnchanted: true,
                penalty: 0,
                type: _models_enchanted_book__WEBPACK_IMPORTED_MODULE_1__["EnchantableType"].Book
            },
            {
                enchants: [],
                isEnchanted: true,
                penalty: 0,
                type: _models_enchanted_book__WEBPACK_IMPORTED_MODULE_1__["EnchantableType"].Helmet
            },
        ];
        this.enchantsPerfectSwordElements = [
            {
                enchants: [{
                        type: _models_enchanted_book__WEBPACK_IMPORTED_MODULE_1__["EnchantType"].Sharpness,
                        max: 5,
                        level: 5,
                        mulItem: 1,
                        mulBook: 1
                    }
                ],
                isEnchanted: true,
                penalty: 0,
                type: _models_enchanted_book__WEBPACK_IMPORTED_MODULE_1__["EnchantableType"].Book
            },
            {
                enchants: [{
                        type: _models_enchanted_book__WEBPACK_IMPORTED_MODULE_1__["EnchantType"].Mending,
                        max: 1,
                        level: 1,
                        mulItem: 4,
                        mulBook: 2
                    }
                ],
                isEnchanted: true,
                penalty: 0,
                type: _models_enchanted_book__WEBPACK_IMPORTED_MODULE_1__["EnchantableType"].Book
            },
            {
                enchants: [
                    {
                        type: _models_enchanted_book__WEBPACK_IMPORTED_MODULE_1__["EnchantType"].Unbreaking,
                        max: 3,
                        level: 3,
                        mulItem: 2,
                        mulBook: 1
                    }
                ],
                isEnchanted: true,
                penalty: 0,
                type: _models_enchanted_book__WEBPACK_IMPORTED_MODULE_1__["EnchantableType"].Book
            },
            {
                enchants: [
                    {
                        type: _models_enchanted_book__WEBPACK_IMPORTED_MODULE_1__["EnchantType"].Looting,
                        max: 3,
                        level: 3,
                        mulItem: 4,
                        mulBook: 2
                    },
                ],
                isEnchanted: true,
                penalty: 0,
                type: _models_enchanted_book__WEBPACK_IMPORTED_MODULE_1__["EnchantableType"].Book
            },
            {
                enchants: [
                    {
                        type: _models_enchanted_book__WEBPACK_IMPORTED_MODULE_1__["EnchantType"].Fire_Aspect,
                        max: 2,
                        level: 2,
                        mulItem: 4,
                        mulBook: 2
                    },
                ],
                isEnchanted: true,
                penalty: 0,
                type: _models_enchanted_book__WEBPACK_IMPORTED_MODULE_1__["EnchantableType"].Book
            },
            {
                enchants: [
                    {
                        type: _models_enchanted_book__WEBPACK_IMPORTED_MODULE_1__["EnchantType"].Sweeping_Edge,
                        max: 3,
                        level: 3,
                        mulItem: 4,
                        mulBook: 2
                    },
                ],
                isEnchanted: true,
                penalty: 0,
                type: _models_enchanted_book__WEBPACK_IMPORTED_MODULE_1__["EnchantableType"].Book
            },
            {
                enchants: [
                    {
                        type: _models_enchanted_book__WEBPACK_IMPORTED_MODULE_1__["EnchantType"].Knockback,
                        max: 2,
                        level: 2,
                        mulItem: 2,
                        mulBook: 1
                    },
                ],
                isEnchanted: true,
                penalty: 0,
                type: _models_enchanted_book__WEBPACK_IMPORTED_MODULE_1__["EnchantableType"].Book
            },
            {
                enchants: [],
                isEnchanted: true,
                penalty: 0,
                type: _models_enchanted_book__WEBPACK_IMPORTED_MODULE_1__["EnchantableType"].Sword
            },
        ];
        this.enchantElements = [
            {
                enchants: [],
                isEnchanted: true,
                penalty: 0,
                type: _models_enchanted_book__WEBPACK_IMPORTED_MODULE_1__["EnchantableType"].Chestplate
            },
            {
                enchants: [{
                        type: _models_enchanted_book__WEBPACK_IMPORTED_MODULE_1__["EnchantType"].Protection,
                        level: 4,
                        max: 4,
                        mulBook: 1,
                        mulItem: 1
                    }
                ],
                isEnchanted: true,
                penalty: 0,
                type: _models_enchanted_book__WEBPACK_IMPORTED_MODULE_1__["EnchantableType"].Book
            },
            {
                enchants: [{
                        type: _models_enchanted_book__WEBPACK_IMPORTED_MODULE_1__["EnchantType"].Mending,
                        max: 1,
                        level: 1,
                        mulItem: 4,
                        mulBook: 2
                    }
                ],
                isEnchanted: true,
                penalty: 0,
                type: _models_enchanted_book__WEBPACK_IMPORTED_MODULE_1__["EnchantableType"].Book
            },
            {
                enchants: [
                    {
                        type: _models_enchanted_book__WEBPACK_IMPORTED_MODULE_1__["EnchantType"].Unbreaking,
                        max: 3,
                        level: 3,
                        mulItem: 2,
                        mulBook: 1
                    }
                ],
                isEnchanted: true,
                penalty: 0,
                type: _models_enchanted_book__WEBPACK_IMPORTED_MODULE_1__["EnchantableType"].Book
            },
            {
                enchants: [
                    {
                        type: _models_enchanted_book__WEBPACK_IMPORTED_MODULE_1__["EnchantType"].Thorns,
                        level: 3,
                        max: 3,
                        mulItem: 8,
                        mulBook: 4
                    },
                ],
                isEnchanted: true,
                penalty: 0,
                type: _models_enchanted_book__WEBPACK_IMPORTED_MODULE_1__["EnchantableType"].Book
            },
        ];
        this.selectedTarget = "Book";
        this.selectedSacrifice = "Book";
        this.totalCost = 0;
        this.logText = '';
        this.addBookLiteral = "Add Book";
        this.removeBookLiteral = "Remove Book";
        this.currentSelectedType = _models_enchanted_book__WEBPACK_IMPORTED_MODULE_1__["EnchantableType"].Sword;
    }
    ngOnInit() {
        if (this.enchantElements == null || !this.enchantElements.length) {
            this.addBookLiteral = "Add Tool/Armor/Weapon";
            this.removeBookLiteral = "";
        }
        else {
            this.enchantElements.map((el, index) => el.enchants.map(el2 => this.conflictEnchantTypes[index].push(el2.type)));
        }
    }
    removeElement() {
        this.enchantElements.pop();
        if (this.enchantElements == null || !this.enchantElements.length) {
            this.addBookLiteral = "Add Tool/Armor/Weapon";
            this.removeBookLiteral = "";
        }
        if (this.enchantElements.length == 1) {
            this.removeBookLiteral = "Remove Tool/Armor/Weapon";
        }
    }
    addElement() {
        if (this.enchantElements == null || !this.enchantElements.length) {
            this.enchantElements = [];
            this.enchantElements.push({
                enchants: [],
                isEnchanted: false,
                penalty: 0,
                type: this.currentSelectedType
            });
            this.addBookLiteral = "Add Book";
            this.removeBookLiteral = "Remove Tool/Armor/Weapon";
        }
        else {
            if (this.enchantElements.length > 0) {
                this.removeBookLiteral = "Remove Book";
            }
            this.enchantElements.push({
                enchants: [],
                isEnchanted: false,
                penalty: 0,
                type: _models_enchanted_book__WEBPACK_IMPORTED_MODULE_1__["EnchantableType"].Book
            });
        }
    }
    enchantTypeChange() {
    }
    addEnchant(index, enchant) {
        this.conflictEnchantTypes.map((el, i) => {
            if (i != index && !el.includes(enchant)) {
                this.conflictEnchantTypes[i].push(enchant);
                this.conflictEnchantTypes[i] = [].concat(this.conflictEnchantTypes[i]);
            }
        });
        console.log(this.conflictEnchantTypes);
    }
    removeEnchant(index, enchant) {
        this.conflictEnchantTypes.map((el, i) => {
            this.conflictEnchantTypes[i] = el.filter(el => el != enchant);
        });
        console.log(this.conflictEnchantTypes);
    }
    findBestCombination() {
        if (this.enchantElements.length > 1) {
            this.totalCost = Object(_utils_costUtils__WEBPACK_IMPORTED_MODULE_3__["findCost"])(this.enchantElements[0], this.enchantElements[1]);
            this.totalForges = 0;
            this.totalCalculus = 0;
            this.foundInCache = 0;
            this.totalValidPermutations = 0;
            this.totalInvalidPermutations = 0;
            this.resultsBrief = new Map();
            let result = this.findBestCombinationRecursive(this.enchantElements.map(el => ({ cost: 0, totalCost: 0, maxCost: 0, enchant: el })));
            console.log('Resumen de costes: ', this.resultsBrief);
            console.log('Nº de permutaciones validas  : ', this.totalValidPermutations);
            console.log('Nº de permutaciones invalidas: ', this.totalInvalidPermutations);
            console.log('                        total: ', this.totalInvalidPermutations + this.totalValidPermutations);
            console.log('Nº de calculos salvados por cache: ', this.foundInCache);
            console.log('Nº de combinaciones procesadas: ', this.totalCalculus);
            console.log('Nº de forjados simulados: ', this.totalForges);
            console.log('RESULTADO FINAL: ');
            this.totalCost = result.totalCost;
            this.printEnchantableWithCost(result, 0, true);
        }
    }
    findBestCombinationRecursive(enchantElementsClone) {
        // console.log('Se llama a findBestCombinationRecursion con: ', this.printEnchantableList(enchantElementsClone.map(el => el.enchant)))
        if (!enchantElementsClone || enchantElementsClone.length === 0)
            return null;
        if (enchantElementsClone.length == 1)
            return { cost: 0, totalCost: 0, maxCost: 0, enchant: enchantElementsClone[0].enchant };
        if (enchantElementsClone.length == 2) {
            let normalOrderCost = Object(_utils_costUtils__WEBPACK_IMPORTED_MODULE_3__["findCost"])(enchantElementsClone[0].enchant, enchantElementsClone[1].enchant);
            let inverseOrderCost = Object(_utils_costUtils__WEBPACK_IMPORTED_MODULE_3__["findCost"])(enchantElementsClone[1].enchant, enchantElementsClone[0].enchant);
            return (inverseOrderCost < normalOrderCost) ?
                {
                    cost: inverseOrderCost,
                    totalCost: inverseOrderCost + enchantElementsClone[0].totalCost + enchantElementsClone[1].totalCost,
                    maxCost: Math.max(inverseOrderCost, enchantElementsClone[0].maxCost, enchantElementsClone[1].maxCost),
                    enchant: this.forge(enchantElementsClone[1].enchant, enchantElementsClone[0].enchant),
                    children: [enchantElementsClone[1], enchantElementsClone[0]]
                }
                :
                    {
                        cost: normalOrderCost,
                        totalCost: normalOrderCost + enchantElementsClone[0].totalCost + enchantElementsClone[1].totalCost,
                        maxCost: Math.max(normalOrderCost, enchantElementsClone[0].maxCost, enchantElementsClone[1].maxCost),
                        enchant: this.forge(enchantElementsClone[0].enchant, enchantElementsClone[1].enchant),
                        children: [enchantElementsClone[0], enchantElementsClone[1]]
                    };
        }
        const permutations = this.getPermutations(enchantElementsClone, enchantElementsClone.length);
        // this.print3array(permutations);
        let bestWayToForge = { cost: 819999999998, totalCost: 88999999999988, maxCost: 65820000000, enchant: null };
        permutations.map((el, index) => {
            const bestCostSplited = this.findBestWayToForge(el[0]);
            if (bestCostSplited.totalCost < bestWayToForge.totalCost || bestCostSplited.totalCost == bestWayToForge.totalCost && bestCostSplited.maxCost < bestWayToForge.maxCost) {
                bestWayToForge = bestCostSplited;
            }
            else if (bestCostSplited.totalCost == bestWayToForge.totalCost) {
                // Descomentar para ver todas las opciones
                // this.printEnchantableWithCost(bestCostSplited, 0, true);
            }
            if (bestCostSplited.totalCost < 10000000) {
                // console.log('(' + (index + 1) + '/' + permutations.length +') best way to forge this order: ', this.printEnchantableCost(bestCostSplited));
                this.totalValidPermutations++;
                this.resultsBrief.set(bestCostSplited.totalCost + '(' + bestCostSplited.maxCost + ')', !this.resultsBrief.get(bestCostSplited.totalCost + '(' + bestCostSplited.maxCost + ')') ? 1 : this.resultsBrief.get(bestCostSplited.totalCost + '(' + bestCostSplited.maxCost + ')') + 1);
            }
            else {
                // console.error('(' + (index + 1) + '/' + permutations.length +') invalid permutation: ', this.printEnchantableCost(bestCostSplited));
                this.totalInvalidPermutations++;
            }
        });
        const costs = [];
        this.resultsBrief.forEach((el, key) => costs.push(el));
        const gcd = this.gcd(costs);
        this.resultsBrief.forEach((el, key) => this.resultsBrief.set(key, el));
        this.resultsBrief = new Map([...this.resultsBrief.entries()].sort());
        console.log('Best of all permutations: ', this.printEnchantableCost(bestWayToForge));
        return bestWayToForge;
    }
    gcd(list) {
        if (!list || !list.length)
            return 1;
        list = list.map(el => Math.floor(el));
        console.log(list);
        let gcd = list[0];
        list.map(el => {
            gcd = this.gcd_two_numbers(gcd, el);
        });
        console.log(gcd);
        return gcd;
    }
    gcd_two_numbers(x, y) {
        let x2 = Math.abs(x);
        let y2 = Math.abs(y);
        while (y2) {
            let t = y2;
            y2 = x2 % y2;
            x2 = t;
        }
        // console.log('gcd de: ' + x + ' y ' + y + ' = ' + x2);
        return x2;
    }
    findBestWayToForge(list) {
        if (!list || !list.length)
            return null;
        if (list.length == 1)
            return Object.assign({}, list[0]);
        this.totalCalculus++;
        if (list.length == 2) {
            const cost = Object(_utils_costUtils__WEBPACK_IMPORTED_MODULE_3__["findCost"])(list[0].enchant, list[1].enchant);
            const best = {
                cost: cost,
                totalCost: cost + list[0].totalCost + list[1].totalCost,
                maxCost: Math.max(cost, list[0].maxCost, list[1].maxCost),
                enchant: this.forge(list[0].enchant, list[1].enchant),
                children: [list[0], list[1]]
            };
            this.cache.set(JSON.stringify(list), best);
            return best;
        }
        if (list.length == 3) {
            const listLessOne = list.filter((el, index) => index < list.length - 1);
            const newEnchantLessOne = this.findBestWayToForge(listLessOne);
            const cost = Object(_utils_costUtils__WEBPACK_IMPORTED_MODULE_3__["findCost"])(newEnchantLessOne.enchant, list[2].enchant);
            const best = {
                cost: cost,
                totalCost: cost + newEnchantLessOne.totalCost + list[2].totalCost,
                maxCost: Math.max(cost, newEnchantLessOne.maxCost, list[2].maxCost),
                enchant: this.forge(newEnchantLessOne.enchant, list[2].enchant),
                children: [newEnchantLessOne, list[2]]
            };
            this.cache.set(JSON.stringify(list), best);
            return best;
        }
        const cachedInfo = this.cache.get(JSON.stringify(list));
        if (!!cachedInfo) {
            this.foundInCache++;
            return cachedInfo;
        }
        // length 3 o superior:
        const listLessOne = list.filter((el, index) => index < list.length - 1);
        const listLessTwo = list.filter((el, index) => index < list.length - 2);
        const newEnchantLessOne = this.findBestWayToForge(listLessOne);
        const costOne = Object(_utils_costUtils__WEBPACK_IMPORTED_MODULE_3__["findCost"])(newEnchantLessOne.enchant, list[list.length - 1].enchant);
        const totalCostOne = costOne + newEnchantLessOne.totalCost + list[list.length - 1].totalCost;
        const newEnchantLessTwo = this.findBestWayToForge(listLessTwo);
        const costLastPair = Object(_utils_costUtils__WEBPACK_IMPORTED_MODULE_3__["findCost"])(list[list.length - 2].enchant, list[list.length - 1].enchant);
        const newLastPairEnchant = {
            cost: costLastPair,
            totalCost: costLastPair + list[list.length - 2].totalCost + list[list.length - 1].totalCost,
            maxCost: Math.max(costLastPair, list[list.length - 2].maxCost, list[list.length - 1].maxCost),
            enchant: this.forge(list[list.length - 2].enchant, list[list.length - 1].enchant),
            children: [list[list.length - 2], list[list.length - 1]]
        };
        const costTwo = Object(_utils_costUtils__WEBPACK_IMPORTED_MODULE_3__["findCost"])(newEnchantLessTwo.enchant, newLastPairEnchant.enchant);
        const totalCostTwo = costTwo + newEnchantLessTwo.totalCost + newLastPairEnchant.totalCost;
        let best = {
            cost: costTwo,
            totalCost: totalCostTwo,
            maxCost: Math.max(costTwo, newEnchantLessTwo.maxCost, newLastPairEnchant.maxCost),
            enchant: this.forge(newEnchantLessTwo.enchant, newLastPairEnchant.enchant),
            children: [newEnchantLessTwo, newLastPairEnchant]
        };
        if (totalCostOne < totalCostTwo) {
            best = {
                cost: costOne,
                totalCost: totalCostOne,
                maxCost: Math.max(costOne, newEnchantLessOne.maxCost, list[list.length - 1].maxCost),
                enchant: this.forge(newEnchantLessOne.enchant, list[list.length - 1].enchant),
                children: [newEnchantLessOne, list[list.length - 1]]
            };
        }
        this.cache.set(JSON.stringify(list), best);
        return best;
    }
    findBestCostSplittingBy(initialGroupSize, enchants) {
        const lists = this.getPermutations(enchants, initialGroupSize);
        const result = { cost: 9199999999, totalCost: 99999999999999, maxCost: 981822222222, enchant: null };
        lists.map(pair => {
            let enchant1 = this.findBestCombinationRecursive(pair[0]);
            let enchant2 = this.findBestCombinationRecursive(pair[1]);
            let cost = Object(_utils_costUtils__WEBPACK_IMPORTED_MODULE_3__["findCost"])(enchant1.enchant, enchant2.enchant);
            if (cost + enchant1.totalCost + enchant2.totalCost < result.totalCost) {
                result.cost = cost;
                result.totalCost = cost + enchant1.totalCost + enchant2.totalCost;
                result.enchant = this.forge(enchant1.enchant, enchant2.enchant);
                result.children = [enchant1, enchant2];
            }
        });
        return result;
    }
    getPermutations(enchants, initialGroupSize) {
        let result = [];
        if (!enchants)
            return [];
        if (initialGroupSize == 0)
            return [[enchants]];
        if (initialGroupSize == 1) {
            enchants.map((el, index) => result.push([[el], enchants.filter((el2, index2) => index !== index2)]));
        }
        else {
            const lists = this.getPermutations(enchants, initialGroupSize - 1);
            lists.map(list => {
                let particionAFaltaDe1 = list[0];
                let onePartitions = this.getPermutations(list[1], 1);
                onePartitions.map(el => result.push([particionAFaltaDe1.concat(el[0]), [].concat(el[1])]));
            });
        }
        // console.log(result);
        // console.log('Partitions size('+initialGroupSize+') of ' + this.printEnchantableList(enchants.map(el => el.enchant)));
        return result;
    }
    printEnchantableWithCost(enchant, tabs = 0, trace = true) {
        if (!enchant || !enchant.cost)
            return;
        let str = "";
        for (let i = 0; i < tabs; i++) {
            str += '__';
        }
        if (!enchant.enchant && trace) {
            this.logText += (!str ? '' : '|') + str + enchant.enchant + '[totalCost:' + enchant.totalCost + '] - [maxCost:' + enchant.maxCost + '] - [cost:' + enchant.cost + '] - ' + this.printEnchantable(enchant.enchant) + '\n';
            console.log((!str ? '' : '|') + str + enchant.enchant + '[totalCost:' + enchant.totalCost + '] - [maxCost:' + enchant.maxCost + '] - [cost:' + enchant.cost + '] - ' + this.printEnchantable(enchant.enchant));
        }
        else {
            this.logText += (!str ? '' : '|') + str + enchant.enchant.type + '[totalCost:' + enchant.totalCost + '] - [maxCost:' + enchant.maxCost + '] - [cost:' + enchant.cost + '] - [penalty:' + enchant.enchant.penalty + '] - ' + this.printEnchantable(enchant.enchant) + '\n';
            console.log((!str ? '' : '|') + str + enchant.enchant.type + '[totalCost:' + enchant.totalCost + '] - [maxCost:' + enchant.maxCost + '] - [cost:' + enchant.cost + '] - [penalty:' + enchant.enchant.penalty + '] - ' + this.printEnchantable(enchant.enchant));
        }
        this.printEnchantableWithCostList(enchant.children, tabs + 1, trace);
    }
    printEnchantableWithCostList(children, tabs, trace = true) {
        if (!children || !trace)
            return;
        children.map(el => this.printEnchantableWithCost(el, tabs));
    }
    print3array(result, trace = true) {
        if (!trace)
            return;
        result.map(pair => console.log(this.printEnchantableList(pair[0].map(el => el.enchant)) + ' con ' + this.printEnchantableList(pair[1].map(el => el.enchant))));
    }
    printEnchantableList(enchants) {
        return '[' + enchants.map(el => /*'{' + el.type + '}' + */ this.printEnchantable(el)).join(', ') + ']';
    }
    printEnchantableCost(enchant) {
        if (!enchant)
            return '{undef}';
        return '[' + enchant.enchant.enchants.map(el => el.type).join(', ') + ']';
    }
    printEnchantable(enchant) {
        if (!enchant)
            return '{undef}';
        return '[' + enchant.enchants.map(el => el.type).join(', ') + ']';
    }
    forge(target, sacrifice) {
        // console.log('Se forja ' + this.printEnchantable(target) + ' con ' + this.printEnchantable(sacrifice));
        this.totalForges++;
        return {
            enchants: target.enchants.concat(sacrifice.enchants),
            isEnchanted: true,
            penalty: Math.max(target.penalty, sacrifice.penalty) + 1,
            type: target.type
        };
    }
    getTool(which) {
        /*tool = {
            type: $(`#${which} > .type > select`).val(),
            enchantments: {},
            prior_penalty: Number($(`#${which}_penalty`).val())
        }
    
        for (i = 0; i < $(`#${which} > .enchant`).children().length; i += 1) {
            let enchant_name = $(
                `#${which} > .enchant > .enchant_${i} > .enchant_name`
            ).val()
            if (Object.keys(enchant_list).includes(enchant_name)) {
                let enchant_lv = $(
                    `#${which} > .enchant > .enchant_${i} > .enchant_lv`
                ).val()
                tool['enchantments'][enchant_name] = Number(enchant_lv)
            }
        }
        return tool*/
    }
    setFinalCost() {
        /*const [total_cost, result_tool] = findCost()
        // console.log(total_cost, result_tool)
        $('#total_cost').text('Cost : ' + total_cost)
    
        let tool_summary_text = ''
        for (enchant in result_tool.enchantments) {
            tool_summary_text +=
                enchant + ' ' + result_tool.enchantments[enchant] + '<br/>'
        }
        $('#result_tool').html(tool_summary_text)*/
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 21, vars: 6, consts: [[1, "flex-wrapper"], [1, "nav-main", "flex-wrapper"], [4, "ngFor", "ngForOf"], [1, "section"], [1, "container"], [1, "findCost", "big", 3, "click"], ["class", "container", 4, "ngIf"], [1, "nav-side"], [1, "section", "center"], ["id", "total_cost"], ["id", "result_tool"], ["readonly", "", "rows", "6", "id", "log", "placeholder", "Log Text"], ["id", "target", 1, "section", "full-width", "bgcolor"], [3, "enchant", "conflictEnchantTypes", "addEnchant", "removeEnchant"], [1, "section", "no-padding", "plus-sign"], [1, "big-text", 3, "ngModel", "ngModelChange"], [3, "value", 4, "ngFor", "ngForOf"], [3, "value"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, AppComponent_ng_container_2_Template, 5, 2, "ng-container", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "button", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AppComponent_Template_button_click_5_listener() { return ctx.addElement(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, AppComponent_div_7_Template, 3, 1, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, AppComponent_div_8_Template, 3, 2, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "button", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AppComponent_Template_button_click_12_listener() { return ctx.findBestCombination(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Find Best Combination");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "h2", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "p", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "footer");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "textarea", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.enchantElements);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.addBookLiteral);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !!ctx.removeBookLiteral);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.removeBookLiteral);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Total Cost: ", ctx.totalCost, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.logText);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], _components_enchanted_book_enchanted_book_component__WEBPACK_IMPORTED_MODULE_5__["EnchantedBookComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["SelectControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgModel"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgSelectOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ɵangular_packages_forms_forms_x"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-root',
                templateUrl: './app.component.html',
                styleUrls: ['./app.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _components_enchanted_book_enchanted_book_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/enchanted-book/enchanted-book.component */ "./src/app/components/enchanted-book/enchanted-book.component.ts");






class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
        _components_enchanted_book_enchanted_book_component__WEBPACK_IMPORTED_MODULE_4__["EnchantedBookComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [
                    _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
                    _components_enchanted_book_enchanted_book_component__WEBPACK_IMPORTED_MODULE_4__["EnchantedBookComponent"]
                ],
                imports: [
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"]
                ],
                providers: [],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/components/enchanted-book/enchanted-book.component.ts":
/*!***********************************************************************!*\
  !*** ./src/app/components/enchanted-book/enchanted-book.component.ts ***!
  \***********************************************************************/
/*! exports provided: EnchantedBookComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EnchantedBookComponent", function() { return EnchantedBookComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var src_app_models_enchanted_book__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/models/enchanted.book */ "./src/app/models/enchanted.book.ts");
/* harmony import */ var src_app_db_enchants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/db/enchants */ "./src/app/db/enchants.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");







function EnchantedBookComponent_ng_container_0_option_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "option", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const enchant_r4 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", enchant_r4.type);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", enchant_r4.type, "");
} }
function EnchantedBookComponent_ng_container_0_input_11_Template(rf, ctx) { if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "input", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function EnchantedBookComponent_ng_container_0_input_11_Template_input_ngModelChange_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r6); const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r5.currentSelected.level = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r2.currentSelected.level)("max", ctx_r2.currentSelected.max);
} }
function EnchantedBookComponent_ng_container_0_div_16_Template(rf, ctx) { if (rf & 1) {
    const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "input", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "input", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "button", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function EnchantedBookComponent_ng_container_0_div_16_Template_button_click_3_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r10); const enchant_r7 = ctx.$implicit; const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r9.removeEnchantButton(enchant_r7); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "X");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const enchant_r7 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", enchant_r7.type);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", enchant_r7.level);
} }
function EnchantedBookComponent_ng_container_0_Template(rf, ctx) { if (rf & 1) {
    const _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "span", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Prior Work Penalty");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "input", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function EnchantedBookComponent_ng_container_0_Template_input_ngModelChange_7_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r12); const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r11.enchant.penalty = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "select", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function EnchantedBookComponent_ng_container_0_Template_select_ngModelChange_9_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r12); const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r13.currentSelected.type = $event; })("ngModelChange", function EnchantedBookComponent_ng_container_0_Template_select_ngModelChange_9_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r12); const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r14.enchantTypeChange(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, EnchantedBookComponent_ng_container_0_option_10_Template, 2, 2, "option", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, EnchantedBookComponent_ng_container_0_input_11_Template, 1, 2, "input", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "button", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function EnchantedBookComponent_ng_container_0_Template_button_click_13_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r12); const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r15.addEnchantButton(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, " Add Enchantment ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](16, EnchantedBookComponent_ng_container_0_div_16_Template, 5, 2, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r0.enchant.type);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r0.enchant.penalty);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r0.currentSelected.type);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r0.availableEnchantList);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.currentSelected.type != null);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", !ctx_r0.currentSelected);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r0.enchant.enchants);
} }
class EnchantedBookComponent {
    constructor() {
        this.enchant = {
            enchants: [],
            isEnchanted: true,
            penalty: 0,
            type: src_app_models_enchanted_book__WEBPACK_IMPORTED_MODULE_1__["EnchantableType"].Book
        };
        this.conflictEnchantTypes = [];
        this.addEnchant = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.removeEnchant = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.level = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](1, [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].min(1), _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].max(1)]);
        this.currentSelected = {
            max: 1,
            mulBook: 1,
            mulItem: 1,
            type: null,
            level: 1,
        };
        this.availableEnchantList = src_app_db_enchants__WEBPACK_IMPORTED_MODULE_2__["ENCHANT_LIST"];
        this.enchantList = src_app_db_enchants__WEBPACK_IMPORTED_MODULE_2__["ENCHANT_LIST"];
    }
    ngOnChanges(changes) {
        this.deleteConflicts();
    }
    ngOnInit() {
        this.deleteConflicts();
    }
    enchantTypeChange() {
        if (!!this.currentSelected && this.currentSelected.type != null) {
            console.log(this.availableEnchantList);
            const found = this.availableEnchantList.find(el => el.type == this.currentSelected.type);
            console.log(found);
            this.currentSelected.max = found.max;
            this.currentSelected.mulBook = found.mulBook;
            this.currentSelected.mulItem = found.mulItem;
            this.currentSelected.level = this.currentSelected.max;
        }
        this.deleteConflicts();
    }
    addEnchantButton() {
        if (this.currentSelected.type != null) {
            if (this.isCompatible(this.enchant.enchants, this.currentSelected.type)) {
                this.enchant.enchants = this.enchant.enchants.filter(el => el.type !== this.currentSelected.type);
                this.enchant.enchants.push(Object.assign({}, this.currentSelected));
                this.addEnchant.emit(this.currentSelected.type);
                return;
            }
            else {
                console.log('Conflict adding: ' + this.currentSelected.type);
            }
        }
        this.deleteConflicts();
    }
    isCompatible(enchants, type) {
        let foundConflict = false;
        src_app_db_enchants__WEBPACK_IMPORTED_MODULE_2__["CONFLICT_ENCHANT"].map(el => !!el.find(el2 => el2 === type) ? foundConflict = foundConflict || this.anyInCommon(el, enchants) : null);
        this.conflictEnchantTypes.map(el => el == type ? foundConflict = true : null);
        return !foundConflict;
    }
    isCompatibleType(enchants, type) {
        let foundConflict = false;
        src_app_db_enchants__WEBPACK_IMPORTED_MODULE_2__["CONFLICT_ENCHANT"].map(el => !!el.find(el2 => el2 === type) ? foundConflict = foundConflict || this.anyInCommonType(el, enchants) : null);
        this.conflictEnchantTypes.map(el => el == type ? foundConflict = true : null);
        return !foundConflict;
    }
    anyInCommon(typeList, enchants) {
        let found = false;
        typeList.map(enchantType => (found = found || !!enchants.find(el2 => el2.type === enchantType)));
        return found;
    }
    anyInCommonType(typeList, enchants) {
        let found = false;
        typeList.map(enchantType => (found = found || !!enchants.find(el2 => el2 === enchantType)));
        return found;
    }
    removeEnchantButton(enchant) {
        this.enchant.enchants = this.enchant.enchants.filter(el => el.type != enchant.type);
        this.deleteConflicts();
        this.removeEnchant.emit(enchant.type);
    }
    deleteConflicts() {
        this.enchant.enchants = this.enchant.enchants.filter(el => !!this.conflictEnchantTypes.find(el2 => el.type == el2));
        this.availableEnchantList = src_app_db_enchants__WEBPACK_IMPORTED_MODULE_2__["ENCHANT_LIST"].filter(el => !!src_app_db_enchants__WEBPACK_IMPORTED_MODULE_2__["APPLICABLE_ENCHANT"].get(this.enchant.type).find(el2 => el.type == el2));
        this.availableEnchantList = this.availableEnchantList.filter(el => !this.conflictEnchantTypes.find(el2 => el.type == el2));
        this.availableEnchantList = this.availableEnchantList.filter(el => !!this.isCompatibleType(this.conflictEnchantTypes, el.type));
        // console.log(this.conflictEnchantTypes);
        // console.log(this.availableEnchantList);
        this.enchantList = this.enchantList.filter(el => !this.conflictEnchantTypes.find(el2 => el.type == el2));
        this.enchantList = this.enchantList.filter(el => !!this.isCompatibleType(this.conflictEnchantTypes, el.type));
    }
}
EnchantedBookComponent.ɵfac = function EnchantedBookComponent_Factory(t) { return new (t || EnchantedBookComponent)(); };
EnchantedBookComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: EnchantedBookComponent, selectors: [["app-enchanted-book"]], inputs: { enchant: "enchant", conflictEnchantTypes: "conflictEnchantTypes" }, outputs: { addEnchant: "addEnchant", removeEnchant: "removeEnchant" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵNgOnChangesFeature"]], decls: 1, vars: 1, consts: [[4, "ngIf"], [1, "container"], [1, "left", "big-text"], [1, "right"], ["id", "target_penalty", "type", "number", "placeholder", "0", "min", "0", "max", "6", 3, "ngModel", "ngModelChange"], [1, "container", "type"], [1, "big-text", 3, "ngModel", "ngModelChange"], [3, "value", 4, "ngFor", "ngForOf"], ["class", "enchant_lv", "type", "number", "min", "1", 3, "ngModel", "max", "ngModelChange", 4, "ngIf"], [1, "addEnchantBtn", 3, "disabled", "click"], [1, "container", "enchant"], ["class", "container type", 4, "ngFor", "ngForOf"], [3, "value"], ["type", "number", "min", "1", 1, "enchant_lv", 3, "ngModel", "max", "ngModelChange"], ["disabled", "", 1, "enchant_name", 3, "value"], ["disabled", "", 1, "enchant_lv", 3, "value"], [1, "enchant_remove", "removeEnchantBtn", 3, "click"]], template: function EnchantedBookComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, EnchantedBookComponent_ng_container_0_Template, 17, 7, "ng-container", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.enchant);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NumberValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgModel"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["SelectControlValueAccessor"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgSelectOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ɵangular_packages_forms_forms_x"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvZW5jaGFudGVkLWJvb2svZW5jaGFudGVkLWJvb2suY29tcG9uZW50LnNjc3MifQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](EnchantedBookComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-enchanted-book',
                templateUrl: './enchanted-book.component.html',
                styleUrls: ['./enchanted-book.component.scss']
            }]
    }], function () { return []; }, { enchant: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], conflictEnchantTypes: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], addEnchant: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }], removeEnchant: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }] }); })();


/***/ }),

/***/ "./src/app/db/enchants.ts":
/*!********************************!*\
  !*** ./src/app/db/enchants.ts ***!
  \********************************/
/*! exports provided: ENCHANT_TYPES, CONFLICT_ENCHANT, APPLICABLE_ENCHANT, ENCHANT_LIST */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ENCHANT_TYPES", function() { return ENCHANT_TYPES; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CONFLICT_ENCHANT", function() { return CONFLICT_ENCHANT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "APPLICABLE_ENCHANT", function() { return APPLICABLE_ENCHANT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ENCHANT_LIST", function() { return ENCHANT_LIST; });
/* harmony import */ var _models_enchanted_book__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../models/enchanted.book */ "./src/app/models/enchanted.book.ts");

const ENCHANT_TYPES = [
    _models_enchanted_book__WEBPACK_IMPORTED_MODULE_0__["EnchantableType"].Sword,
    _models_enchanted_book__WEBPACK_IMPORTED_MODULE_0__["EnchantableType"].Axe,
    _models_enchanted_book__WEBPACK_IMPORTED_MODULE_0__["EnchantableType"].Pickaxe,
    _models_enchanted_book__WEBPACK_IMPORTED_MODULE_0__["EnchantableType"].Shovel,
    _models_enchanted_book__WEBPACK_IMPORTED_MODULE_0__["EnchantableType"].Helmet,
    _models_enchanted_book__WEBPACK_IMPORTED_MODULE_0__["EnchantableType"].Chestplate,
    _models_enchanted_book__WEBPACK_IMPORTED_MODULE_0__["EnchantableType"].Leggings,
    _models_enchanted_book__WEBPACK_IMPORTED_MODULE_0__["EnchantableType"].Boots,
    _models_enchanted_book__WEBPACK_IMPORTED_MODULE_0__["EnchantableType"].Bow,
    _models_enchanted_book__WEBPACK_IMPORTED_MODULE_0__["EnchantableType"].Crossbow,
    _models_enchanted_book__WEBPACK_IMPORTED_MODULE_0__["EnchantableType"].Trident,
    _models_enchanted_book__WEBPACK_IMPORTED_MODULE_0__["EnchantableType"].Fishing_Rod,
    _models_enchanted_book__WEBPACK_IMPORTED_MODULE_0__["EnchantableType"].Book
];
const CONFLICT_ENCHANT = [
    [
        _models_enchanted_book__WEBPACK_IMPORTED_MODULE_0__["EnchantType"].Protection,
        _models_enchanted_book__WEBPACK_IMPORTED_MODULE_0__["EnchantType"].Fire_Protection,
        _models_enchanted_book__WEBPACK_IMPORTED_MODULE_0__["EnchantType"].Blast_Protection,
        _models_enchanted_book__WEBPACK_IMPORTED_MODULE_0__["EnchantType"].Projectile_Protection
    ],
    [_models_enchanted_book__WEBPACK_IMPORTED_MODULE_0__["EnchantType"].Sharpness, _models_enchanted_book__WEBPACK_IMPORTED_MODULE_0__["EnchantType"].Bane_Of_Arthropods, _models_enchanted_book__WEBPACK_IMPORTED_MODULE_0__["EnchantType"].Smite],
    [_models_enchanted_book__WEBPACK_IMPORTED_MODULE_0__["EnchantType"].Silk_Touch, _models_enchanted_book__WEBPACK_IMPORTED_MODULE_0__["EnchantType"].Fortune],
    [_models_enchanted_book__WEBPACK_IMPORTED_MODULE_0__["EnchantType"].Depth_Strider, _models_enchanted_book__WEBPACK_IMPORTED_MODULE_0__["EnchantType"].Frost_Walker],
    [_models_enchanted_book__WEBPACK_IMPORTED_MODULE_0__["EnchantType"].Infinity, _models_enchanted_book__WEBPACK_IMPORTED_MODULE_0__["EnchantType"].Mending],
    [_models_enchanted_book__WEBPACK_IMPORTED_MODULE_0__["EnchantType"].Loyalty, _models_enchanted_book__WEBPACK_IMPORTED_MODULE_0__["EnchantType"].Riptide],
    [_models_enchanted_book__WEBPACK_IMPORTED_MODULE_0__["EnchantType"].Channeling, _models_enchanted_book__WEBPACK_IMPORTED_MODULE_0__["EnchantType"].Riptide],
    [_models_enchanted_book__WEBPACK_IMPORTED_MODULE_0__["EnchantType"].Multishot, _models_enchanted_book__WEBPACK_IMPORTED_MODULE_0__["EnchantType"].Piercing]
];
const APPLICABLE_ENCHANT = new Map([
    [_models_enchanted_book__WEBPACK_IMPORTED_MODULE_0__["EnchantableType"].Sword, [
            _models_enchanted_book__WEBPACK_IMPORTED_MODULE_0__["EnchantType"].Sharpness,
            _models_enchanted_book__WEBPACK_IMPORTED_MODULE_0__["EnchantType"].Smite,
            _models_enchanted_book__WEBPACK_IMPORTED_MODULE_0__["EnchantType"].Bane_Of_Arthropods,
            _models_enchanted_book__WEBPACK_IMPORTED_MODULE_0__["EnchantType"].Knockback,
            _models_enchanted_book__WEBPACK_IMPORTED_MODULE_0__["EnchantType"].Fire_Aspect,
            _models_enchanted_book__WEBPACK_IMPORTED_MODULE_0__["EnchantType"].Looting,
            _models_enchanted_book__WEBPACK_IMPORTED_MODULE_0__["EnchantType"].Unbreaking,
            _models_enchanted_book__WEBPACK_IMPORTED_MODULE_0__["EnchantType"].Mending,
            _models_enchanted_book__WEBPACK_IMPORTED_MODULE_0__["EnchantType"].Curse_Of_Vanishing,
            _models_enchanted_book__WEBPACK_IMPORTED_MODULE_0__["EnchantType"].Sweeping_Edge
        ]],
    [_models_enchanted_book__WEBPACK_IMPORTED_MODULE_0__["EnchantableType"].Pickaxe, [
            _models_enchanted_book__WEBPACK_IMPORTED_MODULE_0__["EnchantType"].Efficiency,
            _models_enchanted_book__WEBPACK_IMPORTED_MODULE_0__["EnchantType"].Fortune,
            _models_enchanted_book__WEBPACK_IMPORTED_MODULE_0__["EnchantType"].Silk_Touch,
            _models_enchanted_book__WEBPACK_IMPORTED_MODULE_0__["EnchantType"].Unbreaking,
            _models_enchanted_book__WEBPACK_IMPORTED_MODULE_0__["EnchantType"].Mending,
            _models_enchanted_book__WEBPACK_IMPORTED_MODULE_0__["EnchantType"].Curse_Of_Vanishing
        ]],
    [_models_enchanted_book__WEBPACK_IMPORTED_MODULE_0__["EnchantableType"].Axe, [
            _models_enchanted_book__WEBPACK_IMPORTED_MODULE_0__["EnchantType"].Efficiency,
            _models_enchanted_book__WEBPACK_IMPORTED_MODULE_0__["EnchantType"].Fortune,
            _models_enchanted_book__WEBPACK_IMPORTED_MODULE_0__["EnchantType"].Silk_Touch,
            _models_enchanted_book__WEBPACK_IMPORTED_MODULE_0__["EnchantType"].Sharpness,
            _models_enchanted_book__WEBPACK_IMPORTED_MODULE_0__["EnchantType"].Smite,
            _models_enchanted_book__WEBPACK_IMPORTED_MODULE_0__["EnchantType"].Bane_Of_Arthropods,
            _models_enchanted_book__WEBPACK_IMPORTED_MODULE_0__["EnchantType"].Unbreaking,
            _models_enchanted_book__WEBPACK_IMPORTED_MODULE_0__["EnchantType"].Mending,
            _models_enchanted_book__WEBPACK_IMPORTED_MODULE_0__["EnchantType"].Curse_Of_Vanishing
        ]],
    [_models_enchanted_book__WEBPACK_IMPORTED_MODULE_0__["EnchantableType"].Shovel, [
            _models_enchanted_book__WEBPACK_IMPORTED_MODULE_0__["EnchantType"].Efficiency,
            _models_enchanted_book__WEBPACK_IMPORTED_MODULE_0__["EnchantType"].Fortune,
            _models_enchanted_book__WEBPACK_IMPORTED_MODULE_0__["EnchantType"].Silk_Touch,
            _models_enchanted_book__WEBPACK_IMPORTED_MODULE_0__["EnchantType"].Unbreaking,
            _models_enchanted_book__WEBPACK_IMPORTED_MODULE_0__["EnchantType"].Mending,
            _models_enchanted_book__WEBPACK_IMPORTED_MODULE_0__["EnchantType"].Curse_Of_Vanishing
        ]],
    [_models_enchanted_book__WEBPACK_IMPORTED_MODULE_0__["EnchantableType"].Helmet, [
            _models_enchanted_book__WEBPACK_IMPORTED_MODULE_0__["EnchantType"].Protection,
            _models_enchanted_book__WEBPACK_IMPORTED_MODULE_0__["EnchantType"].Fire_Protection,
            _models_enchanted_book__WEBPACK_IMPORTED_MODULE_0__["EnchantType"].Projectile_Protection,
            _models_enchanted_book__WEBPACK_IMPORTED_MODULE_0__["EnchantType"].Blast_Protection,
            _models_enchanted_book__WEBPACK_IMPORTED_MODULE_0__["EnchantType"].Respiration,
            _models_enchanted_book__WEBPACK_IMPORTED_MODULE_0__["EnchantType"].Aqua_Affinity,
            _models_enchanted_book__WEBPACK_IMPORTED_MODULE_0__["EnchantType"].Thorns,
            _models_enchanted_book__WEBPACK_IMPORTED_MODULE_0__["EnchantType"].Unbreaking,
            _models_enchanted_book__WEBPACK_IMPORTED_MODULE_0__["EnchantType"].Mending,
            _models_enchanted_book__WEBPACK_IMPORTED_MODULE_0__["EnchantType"].Curse_Of_Binding,
            _models_enchanted_book__WEBPACK_IMPORTED_MODULE_0__["EnchantType"].Curse_Of_Vanishing
        ]],
    [_models_enchanted_book__WEBPACK_IMPORTED_MODULE_0__["EnchantableType"].Chestplate, [
            _models_enchanted_book__WEBPACK_IMPORTED_MODULE_0__["EnchantType"].Protection,
            _models_enchanted_book__WEBPACK_IMPORTED_MODULE_0__["EnchantType"].Fire_Protection,
            _models_enchanted_book__WEBPACK_IMPORTED_MODULE_0__["EnchantType"].Projectile_Protection,
            _models_enchanted_book__WEBPACK_IMPORTED_MODULE_0__["EnchantType"].Blast_Protection,
            _models_enchanted_book__WEBPACK_IMPORTED_MODULE_0__["EnchantType"].Thorns,
            _models_enchanted_book__WEBPACK_IMPORTED_MODULE_0__["EnchantType"].Unbreaking,
            _models_enchanted_book__WEBPACK_IMPORTED_MODULE_0__["EnchantType"].Mending,
            _models_enchanted_book__WEBPACK_IMPORTED_MODULE_0__["EnchantType"].Curse_Of_Binding,
            _models_enchanted_book__WEBPACK_IMPORTED_MODULE_0__["EnchantType"].Curse_Of_Vanishing
        ]],
    [_models_enchanted_book__WEBPACK_IMPORTED_MODULE_0__["EnchantableType"].Leggings, [
            _models_enchanted_book__WEBPACK_IMPORTED_MODULE_0__["EnchantType"].Protection,
            _models_enchanted_book__WEBPACK_IMPORTED_MODULE_0__["EnchantType"].Fire_Protection,
            _models_enchanted_book__WEBPACK_IMPORTED_MODULE_0__["EnchantType"].Projectile_Protection,
            _models_enchanted_book__WEBPACK_IMPORTED_MODULE_0__["EnchantType"].Blast_Protection,
            _models_enchanted_book__WEBPACK_IMPORTED_MODULE_0__["EnchantType"].Thorns,
            _models_enchanted_book__WEBPACK_IMPORTED_MODULE_0__["EnchantType"].Unbreaking,
            _models_enchanted_book__WEBPACK_IMPORTED_MODULE_0__["EnchantType"].Mending,
            _models_enchanted_book__WEBPACK_IMPORTED_MODULE_0__["EnchantType"].Curse_Of_Binding,
            _models_enchanted_book__WEBPACK_IMPORTED_MODULE_0__["EnchantType"].Curse_Of_Vanishing
        ]],
    [_models_enchanted_book__WEBPACK_IMPORTED_MODULE_0__["EnchantableType"].Boots, [
            _models_enchanted_book__WEBPACK_IMPORTED_MODULE_0__["EnchantType"].Protection,
            _models_enchanted_book__WEBPACK_IMPORTED_MODULE_0__["EnchantType"].Fire_Protection,
            _models_enchanted_book__WEBPACK_IMPORTED_MODULE_0__["EnchantType"].Projectile_Protection,
            _models_enchanted_book__WEBPACK_IMPORTED_MODULE_0__["EnchantType"].Blast_Protection,
            _models_enchanted_book__WEBPACK_IMPORTED_MODULE_0__["EnchantType"].Feather_Falling,
            _models_enchanted_book__WEBPACK_IMPORTED_MODULE_0__["EnchantType"].Frost_Walker,
            _models_enchanted_book__WEBPACK_IMPORTED_MODULE_0__["EnchantType"].Depth_Strider,
            _models_enchanted_book__WEBPACK_IMPORTED_MODULE_0__["EnchantType"].Thorns,
            _models_enchanted_book__WEBPACK_IMPORTED_MODULE_0__["EnchantType"].Unbreaking,
            _models_enchanted_book__WEBPACK_IMPORTED_MODULE_0__["EnchantType"].Mending,
            _models_enchanted_book__WEBPACK_IMPORTED_MODULE_0__["EnchantType"].Curse_Of_Binding,
            _models_enchanted_book__WEBPACK_IMPORTED_MODULE_0__["EnchantType"].Curse_Of_Vanishing
        ]],
    [_models_enchanted_book__WEBPACK_IMPORTED_MODULE_0__["EnchantableType"].Bow, [
            _models_enchanted_book__WEBPACK_IMPORTED_MODULE_0__["EnchantType"].Power,
            _models_enchanted_book__WEBPACK_IMPORTED_MODULE_0__["EnchantType"].Punch,
            _models_enchanted_book__WEBPACK_IMPORTED_MODULE_0__["EnchantType"].Flame,
            _models_enchanted_book__WEBPACK_IMPORTED_MODULE_0__["EnchantType"].Infinity,
            _models_enchanted_book__WEBPACK_IMPORTED_MODULE_0__["EnchantType"].Unbreaking,
            _models_enchanted_book__WEBPACK_IMPORTED_MODULE_0__["EnchantType"].Mending,
            _models_enchanted_book__WEBPACK_IMPORTED_MODULE_0__["EnchantType"].Curse_Of_Vanishing
        ]],
    [_models_enchanted_book__WEBPACK_IMPORTED_MODULE_0__["EnchantableType"].Crossbow, [
            _models_enchanted_book__WEBPACK_IMPORTED_MODULE_0__["EnchantType"].Piercing,
            _models_enchanted_book__WEBPACK_IMPORTED_MODULE_0__["EnchantType"].Multishot,
            _models_enchanted_book__WEBPACK_IMPORTED_MODULE_0__["EnchantType"].Quick_Charge,
            _models_enchanted_book__WEBPACK_IMPORTED_MODULE_0__["EnchantType"].Unbreaking,
            _models_enchanted_book__WEBPACK_IMPORTED_MODULE_0__["EnchantType"].Mending,
            _models_enchanted_book__WEBPACK_IMPORTED_MODULE_0__["EnchantType"].Curse_Of_Vanishing
        ]],
    [_models_enchanted_book__WEBPACK_IMPORTED_MODULE_0__["EnchantableType"].Trident, [
            _models_enchanted_book__WEBPACK_IMPORTED_MODULE_0__["EnchantType"].Impaling,
            _models_enchanted_book__WEBPACK_IMPORTED_MODULE_0__["EnchantType"].Loyalty,
            _models_enchanted_book__WEBPACK_IMPORTED_MODULE_0__["EnchantType"].Riptide,
            _models_enchanted_book__WEBPACK_IMPORTED_MODULE_0__["EnchantType"].Channeling,
            _models_enchanted_book__WEBPACK_IMPORTED_MODULE_0__["EnchantType"].Unbreaking,
            _models_enchanted_book__WEBPACK_IMPORTED_MODULE_0__["EnchantType"].Mending,
            _models_enchanted_book__WEBPACK_IMPORTED_MODULE_0__["EnchantType"].Curse_Of_Vanishing
        ]],
    [_models_enchanted_book__WEBPACK_IMPORTED_MODULE_0__["EnchantableType"].Fishing_Rod, [
            _models_enchanted_book__WEBPACK_IMPORTED_MODULE_0__["EnchantType"].Lure,
            _models_enchanted_book__WEBPACK_IMPORTED_MODULE_0__["EnchantType"].Luck_Of_The_Sea,
            _models_enchanted_book__WEBPACK_IMPORTED_MODULE_0__["EnchantType"].Unbreaking,
            _models_enchanted_book__WEBPACK_IMPORTED_MODULE_0__["EnchantType"].Mending,
            _models_enchanted_book__WEBPACK_IMPORTED_MODULE_0__["EnchantType"].Curse_Of_Vanishing
        ]],
    [_models_enchanted_book__WEBPACK_IMPORTED_MODULE_0__["EnchantableType"].Book, [
            _models_enchanted_book__WEBPACK_IMPORTED_MODULE_0__["EnchantType"].Protection,
            _models_enchanted_book__WEBPACK_IMPORTED_MODULE_0__["EnchantType"].Fire_Protection,
            _models_enchanted_book__WEBPACK_IMPORTED_MODULE_0__["EnchantType"].Feather_Falling,
            _models_enchanted_book__WEBPACK_IMPORTED_MODULE_0__["EnchantType"].Blast_Protection,
            _models_enchanted_book__WEBPACK_IMPORTED_MODULE_0__["EnchantType"].Projectile_Protection,
            _models_enchanted_book__WEBPACK_IMPORTED_MODULE_0__["EnchantType"].Thorns,
            _models_enchanted_book__WEBPACK_IMPORTED_MODULE_0__["EnchantType"].Respiration,
            _models_enchanted_book__WEBPACK_IMPORTED_MODULE_0__["EnchantType"].Depth_Strider,
            _models_enchanted_book__WEBPACK_IMPORTED_MODULE_0__["EnchantType"].Aqua_Affinity,
            _models_enchanted_book__WEBPACK_IMPORTED_MODULE_0__["EnchantType"].Sharpness,
            _models_enchanted_book__WEBPACK_IMPORTED_MODULE_0__["EnchantType"].Smite,
            _models_enchanted_book__WEBPACK_IMPORTED_MODULE_0__["EnchantType"].Bane_Of_Arthropods,
            _models_enchanted_book__WEBPACK_IMPORTED_MODULE_0__["EnchantType"].Knockback,
            _models_enchanted_book__WEBPACK_IMPORTED_MODULE_0__["EnchantType"].Fire_Aspect,
            _models_enchanted_book__WEBPACK_IMPORTED_MODULE_0__["EnchantType"].Looting,
            _models_enchanted_book__WEBPACK_IMPORTED_MODULE_0__["EnchantType"].Efficiency,
            _models_enchanted_book__WEBPACK_IMPORTED_MODULE_0__["EnchantType"].Silk_Touch,
            _models_enchanted_book__WEBPACK_IMPORTED_MODULE_0__["EnchantType"].Unbreaking,
            _models_enchanted_book__WEBPACK_IMPORTED_MODULE_0__["EnchantType"].Fortune,
            _models_enchanted_book__WEBPACK_IMPORTED_MODULE_0__["EnchantType"].Power,
            _models_enchanted_book__WEBPACK_IMPORTED_MODULE_0__["EnchantType"].Punch,
            _models_enchanted_book__WEBPACK_IMPORTED_MODULE_0__["EnchantType"].Flame,
            _models_enchanted_book__WEBPACK_IMPORTED_MODULE_0__["EnchantType"].Infinity,
            _models_enchanted_book__WEBPACK_IMPORTED_MODULE_0__["EnchantType"].Luck_Of_The_Sea,
            _models_enchanted_book__WEBPACK_IMPORTED_MODULE_0__["EnchantType"].Lure,
            _models_enchanted_book__WEBPACK_IMPORTED_MODULE_0__["EnchantType"].Frost_Walker,
            _models_enchanted_book__WEBPACK_IMPORTED_MODULE_0__["EnchantType"].Mending,
            _models_enchanted_book__WEBPACK_IMPORTED_MODULE_0__["EnchantType"].Curse_Of_Binding,
            _models_enchanted_book__WEBPACK_IMPORTED_MODULE_0__["EnchantType"].Curse_Of_Vanishing,
            _models_enchanted_book__WEBPACK_IMPORTED_MODULE_0__["EnchantType"].Impaling,
            _models_enchanted_book__WEBPACK_IMPORTED_MODULE_0__["EnchantType"].Riptide,
            _models_enchanted_book__WEBPACK_IMPORTED_MODULE_0__["EnchantType"].Loyalty,
            _models_enchanted_book__WEBPACK_IMPORTED_MODULE_0__["EnchantType"].Channeling,
            _models_enchanted_book__WEBPACK_IMPORTED_MODULE_0__["EnchantType"].Multishot,
            _models_enchanted_book__WEBPACK_IMPORTED_MODULE_0__["EnchantType"].Piercing,
            _models_enchanted_book__WEBPACK_IMPORTED_MODULE_0__["EnchantType"].Quick_Charge,
            _models_enchanted_book__WEBPACK_IMPORTED_MODULE_0__["EnchantType"].Sweeping_Edge
        ]]
]);
const ENCHANT_LIST = [
    {
        type: _models_enchanted_book__WEBPACK_IMPORTED_MODULE_0__["EnchantType"].Protection,
        max: 4,
        mulItem: 1,
        mulBook: 1
    },
    {
        type: _models_enchanted_book__WEBPACK_IMPORTED_MODULE_0__["EnchantType"].Fire_Protection,
        max: 4,
        mulItem: 2,
        mulBook: 1
    },
    {
        type: _models_enchanted_book__WEBPACK_IMPORTED_MODULE_0__["EnchantType"].Feather_Falling,
        max: 4,
        mulItem: 2,
        mulBook: 1
    },
    {
        type: _models_enchanted_book__WEBPACK_IMPORTED_MODULE_0__["EnchantType"].Blast_Protection,
        max: 4,
        mulItem: 4,
        mulBook: 2
    },
    {
        type: _models_enchanted_book__WEBPACK_IMPORTED_MODULE_0__["EnchantType"].Projectile_Protection,
        max: 4,
        mulItem: 2,
        mulBook: 1
    },
    {
        type: _models_enchanted_book__WEBPACK_IMPORTED_MODULE_0__["EnchantType"].Thorns,
        max: 3,
        mulItem: 8,
        mulBook: 4
    },
    {
        type: _models_enchanted_book__WEBPACK_IMPORTED_MODULE_0__["EnchantType"].Respiration,
        max: 3,
        mulItem: 4,
        mulBook: 2
    },
    {
        type: _models_enchanted_book__WEBPACK_IMPORTED_MODULE_0__["EnchantType"].Depth_Strider,
        max: 3,
        mulItem: 4,
        mulBook: 2
    },
    {
        type: _models_enchanted_book__WEBPACK_IMPORTED_MODULE_0__["EnchantType"].Aqua_Affinity,
        max: 1,
        mulItem: 4,
        mulBook: 2
    },
    {
        type: _models_enchanted_book__WEBPACK_IMPORTED_MODULE_0__["EnchantType"].Sharpness,
        max: 5,
        mulItem: 1,
        mulBook: 1
    },
    {
        type: _models_enchanted_book__WEBPACK_IMPORTED_MODULE_0__["EnchantType"].Smite,
        max: 5,
        mulItem: 2,
        mulBook: 1
    },
    {
        type: _models_enchanted_book__WEBPACK_IMPORTED_MODULE_0__["EnchantType"].Bane_Of_Arthropods,
        max: 5,
        mulItem: 2,
        mulBook: 1
    },
    {
        type: _models_enchanted_book__WEBPACK_IMPORTED_MODULE_0__["EnchantType"].Knockback,
        max: 2,
        mulItem: 2,
        mulBook: 1
    },
    {
        type: _models_enchanted_book__WEBPACK_IMPORTED_MODULE_0__["EnchantType"].Fire_Aspect,
        max: 2,
        mulItem: 4,
        mulBook: 2
    },
    {
        type: _models_enchanted_book__WEBPACK_IMPORTED_MODULE_0__["EnchantType"].Looting,
        max: 3,
        mulItem: 4,
        mulBook: 2
    },
    {
        type: _models_enchanted_book__WEBPACK_IMPORTED_MODULE_0__["EnchantType"].Efficiency,
        max: 5,
        mulItem: 1,
        mulBook: 1
    },
    {
        type: _models_enchanted_book__WEBPACK_IMPORTED_MODULE_0__["EnchantType"].Silk_Touch,
        max: 1,
        mulItem: 8,
        mulBook: 4
    },
    {
        type: _models_enchanted_book__WEBPACK_IMPORTED_MODULE_0__["EnchantType"].Unbreaking,
        max: 3,
        mulItem: 2,
        mulBook: 1
    },
    {
        type: _models_enchanted_book__WEBPACK_IMPORTED_MODULE_0__["EnchantType"].Fortune,
        max: 3,
        mulItem: 4,
        mulBook: 2
    },
    {
        type: _models_enchanted_book__WEBPACK_IMPORTED_MODULE_0__["EnchantType"].Power,
        max: 5,
        mulItem: 1,
        mulBook: 1
    },
    {
        type: _models_enchanted_book__WEBPACK_IMPORTED_MODULE_0__["EnchantType"].Punch,
        max: 2,
        mulItem: 4,
        mulBook: 2
    },
    {
        type: _models_enchanted_book__WEBPACK_IMPORTED_MODULE_0__["EnchantType"].Flame,
        max: 1,
        mulItem: 4,
        mulBook: 2
    },
    {
        type: _models_enchanted_book__WEBPACK_IMPORTED_MODULE_0__["EnchantType"].Infinity,
        max: 1,
        mulItem: 8,
        mulBook: 4
    },
    {
        type: _models_enchanted_book__WEBPACK_IMPORTED_MODULE_0__["EnchantType"].Luck_Of_The_Sea,
        max: 3,
        mulItem: 4,
        mulBook: 2
    },
    {
        type: _models_enchanted_book__WEBPACK_IMPORTED_MODULE_0__["EnchantType"].Lure,
        max: 3,
        mulItem: 4,
        mulBook: 2
    },
    {
        type: _models_enchanted_book__WEBPACK_IMPORTED_MODULE_0__["EnchantType"].Frost_Walker,
        max: 2,
        mulItem: 4,
        mulBook: 2
    },
    {
        type: _models_enchanted_book__WEBPACK_IMPORTED_MODULE_0__["EnchantType"].Mending,
        max: 1,
        mulItem: 4,
        mulBook: 2
    },
    {
        type: _models_enchanted_book__WEBPACK_IMPORTED_MODULE_0__["EnchantType"].Curse_Of_Binding,
        max: 1,
        mulItem: 8,
        mulBook: 4
    },
    {
        type: _models_enchanted_book__WEBPACK_IMPORTED_MODULE_0__["EnchantType"].Curse_Of_Vanishing,
        max: 1,
        mulItem: 8,
        mulBook: 4
    },
    {
        type: _models_enchanted_book__WEBPACK_IMPORTED_MODULE_0__["EnchantType"].Impaling,
        max: 5,
        mulItem: 2,
        mulBook: 1
    },
    {
        type: _models_enchanted_book__WEBPACK_IMPORTED_MODULE_0__["EnchantType"].Riptide,
        max: 3,
        mulItem: 4,
        mulBook: 2
    },
    {
        type: _models_enchanted_book__WEBPACK_IMPORTED_MODULE_0__["EnchantType"].Loyalty,
        max: 3,
        mulItem: 1,
        mulBook: 1
    },
    {
        type: _models_enchanted_book__WEBPACK_IMPORTED_MODULE_0__["EnchantType"].Channeling,
        max: 1,
        mulItem: 8,
        mulBook: 4
    },
    {
        type: _models_enchanted_book__WEBPACK_IMPORTED_MODULE_0__["EnchantType"].Multishot,
        max: 1,
        mulItem: 4,
        mulBook: 2
    },
    {
        type: _models_enchanted_book__WEBPACK_IMPORTED_MODULE_0__["EnchantType"].Piercing,
        max: 4,
        mulItem: 1,
        mulBook: 1
    },
    {
        type: _models_enchanted_book__WEBPACK_IMPORTED_MODULE_0__["EnchantType"].Quick_Charge,
        max: 3,
        mulItem: 2,
        mulBook: 1
    },
    {
        type: _models_enchanted_book__WEBPACK_IMPORTED_MODULE_0__["EnchantType"].Sweeping_Edge,
        max: 3,
        mulItem: 4,
        mulBook: 2
    }
];


/***/ }),

/***/ "./src/app/models/enchanted.book.ts":
/*!******************************************!*\
  !*** ./src/app/models/enchanted.book.ts ***!
  \******************************************/
/*! exports provided: EnchantType, EnchantableType */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EnchantType", function() { return EnchantType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EnchantableType", function() { return EnchantableType; });
var EnchantType;
(function (EnchantType) {
    EnchantType["Aqua_Affinity"] = "Aqua Affinity";
    EnchantType["Bane_Of_Arthropods"] = "Bane of Arthropods";
    EnchantType["Blast_Protection"] = "Blast Protection";
    EnchantType["Channeling"] = "Channeling";
    EnchantType["Chopping"] = "Chopping";
    EnchantType["Curse_Of_Binding"] = "Curse of Binding";
    EnchantType["Curse_Of_Vanishing"] = "Curse of Vanishing";
    EnchantType["Item_Destroyed_On_Death_"] = "Item destroyed on death.";
    EnchantType["Depth_Strider"] = "Depth Strider";
    EnchantType["Efficiency"] = "Efficiency";
    EnchantType["Feather_Falling"] = "Feather Falling";
    EnchantType["Fire_Aspect"] = "Fire Aspect";
    EnchantType["Fire_Protection"] = "Fire Protection";
    EnchantType["Flame"] = "Flame";
    EnchantType["Fortune"] = "Fortune";
    EnchantType["Frost_Walker"] = "Frost Walker";
    EnchantType["Impaling"] = "Impaling";
    EnchantType["Infinity"] = "Infinity";
    EnchantType["Knockback"] = "Knockback";
    EnchantType["Looting"] = "Looting";
    EnchantType["Loyalty"] = "Loyalty";
    EnchantType["Luck_Of_The_Sea"] = "Luck of the Sea";
    EnchantType["Lure"] = "Lure";
    EnchantType["Mending"] = "Mending";
    EnchantType["Multishot"] = "Multishot";
    EnchantType["Piercing"] = "Piercing";
    EnchantType["Power"] = "Power";
    EnchantType["Projectile_Protection"] = "Projectile Protection";
    EnchantType["Protection"] = "Protection";
    EnchantType["Punch"] = "Punch";
    EnchantType["Quick_Charge"] = "Quick Charge";
    EnchantType["Respiration"] = "Respiration";
    EnchantType["Riptide"] = "Riptide";
    EnchantType["Sharpness"] = "Sharpness";
    EnchantType["Silk_Touch"] = "Silk Touch";
    EnchantType["Smite"] = "Smite";
    EnchantType["Soul_Speed"] = "Soul Speed";
    EnchantType["Sweeping_Edge"] = "Sweeping Edge";
    EnchantType["Thorns"] = "Thorns";
    EnchantType["Unbreaking"] = "Unbreaking";
})(EnchantType || (EnchantType = {}));
var EnchantableType;
(function (EnchantableType) {
    EnchantableType["Sword"] = "Sword";
    EnchantableType["Axe"] = "Axe";
    EnchantableType["Pickaxe"] = "Pickaxe";
    EnchantableType["Shovel"] = "Shovel";
    EnchantableType["Helmet"] = "Helmet";
    EnchantableType["Chestplate"] = "Chestplate";
    EnchantableType["Leggings"] = "Leggings";
    EnchantableType["Boots"] = "Boots";
    EnchantableType["Bow"] = "Bow";
    EnchantableType["Crossbow"] = "Crossbow";
    EnchantableType["Trident"] = "Trident";
    EnchantableType["Fishing_Rod"] = "Fishing Rod";
    EnchantableType["Book"] = "Book";
})(EnchantableType || (EnchantableType = {}));


/***/ }),

/***/ "./src/app/utils/costUtils.ts":
/*!************************************!*\
  !*** ./src/app/utils/costUtils.ts ***!
  \************************************/
/*! exports provided: findCost */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "findCost", function() { return findCost; });
/* harmony import */ var _models_enchanted_book__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../models/enchanted.book */ "./src/app/models/enchanted.book.ts");

function findCost(target, sacrifice) {
    // const result: Enchantable =  {
    //     type: target.type,
    //     enchants: target.enchants.concat(sacrifice.enchants),
    //     isEnchanted: true,
    //     penalty: Math.max(target.penalty, sacrifice.penalty) + 1
    // }
    if (sacrifice.type !== _models_enchanted_book__WEBPACK_IMPORTED_MODULE_0__["EnchantableType"].Book)
        return 10000000;
    let target_penalty_cost = Math.pow(2, target.penalty) - 1;
    let sacrifice_penalty_cost = Math.pow(2, sacrifice.penalty) - 1;
    let totalLevels = target_penalty_cost + sacrifice_penalty_cost + getEnchantsCost(sacrifice);
    // console.log('cost: ' + printEnchantable(target) + ' + ' + printEnchantable(sacrifice) + ' = ' + totalLevels);
    return totalLevels;
}
function printEnchantable(enchant) {
    if (!enchant)
        return '{undef}';
    return '[' + enchant.enchants.map(el => el.type).join(', ') + ']';
}
function getEnchantsCost(enchant) {
    if (enchant == null || enchant.enchants == null)
        return 0;
    let total = 0;
    if (enchant.type === _models_enchanted_book__WEBPACK_IMPORTED_MODULE_0__["EnchantableType"].Book) {
        enchant.enchants.map(el => total += getEnchantCostOnBook(el));
    }
    else {
        enchant.enchants.map(el => total += getEnchantCost(el));
    }
    return total;
}
function getEnchantCostOnBook(enchant) {
    return enchant.level * enchant.mulBook;
}
function getEnchantCost(enchant) {
    return enchant.level * enchant.mulItem;
}


/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! E:\minecraftanvil\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map