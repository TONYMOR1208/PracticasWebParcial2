"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const controllers_1 = require("../controllers");
const router = (0, express_1.Router)();
router.get('/', controllers_1.getAllIdiomas);
router.get('/:id', controllers_1.getIdiomaById);
router.post('/', controllers_1.createIdioma);
router.put('/:id', controllers_1.updateIdioma);
router.delete('/:id', controllers_1.deleteIdioma);
exports.default = router;
