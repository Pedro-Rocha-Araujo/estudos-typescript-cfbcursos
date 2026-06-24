var dias;
(function (dias) {
    dias[dias["segunda"] = 0] = "segunda";
    dias[dias["terca"] = 1] = "terca";
    dias[dias["quarta"] = 2] = "quarta";
    dias[dias["quinta"] = 3] = "quinta";
    dias[dias["sexta"] = 4] = "sexta";
    dias[dias["sabado"] = 5] = "sabado";
    dias[dias["domingo"] = 6] = "domingo";
})(dias || (dias = {}));
console.log(dias.segunda);
console.log(dias[0]);
export {};
//# sourceMappingURL=aula09.js.map