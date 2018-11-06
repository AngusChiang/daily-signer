"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * combine rgba colors [r, g, b, a]
 * @param rgba1 底色
 * @param rgba2 遮罩色
 * @returns {number[]}
 */
function combineRgba(rgba1, rgba2) {
    const [r1, g1, b1, a1] = rgba1;
    const [r2, g2, b2, a2] = rgba2;
    const a = a1 + a2 - a1 * a2;
    const r = (r1 * a1 + r2 * a2 - r1 * a1 * a2) / a;
    const g = (g1 * a1 + g2 * a2 - g1 * a1 * a2) / a;
    const b = (b1 * a1 + b2 * a2 - b1 * a1 * a2) / a;
    return [r, g, b, a];
}
exports.combineRgba = combineRgba;
//console.log(combineRgba([255, 255, 255, 1], [0, 0, 0, 0.65]))
/**
 * 判断两个颜色是否相似
 * @param rgba1
 * @param rgba2
 * @param t
 * @returns {boolean}
 */
function tolerance(rgba1, rgba2, t) {
    const [r1, g1, b1] = rgba1;
    const [r2, g2, b2] = rgba2;
    return (r1 > r2 - t && r1 < r2 + t
        && g1 > g2 - t && g1 < g2 + t
        && b1 > b2 - t && b1 < b2 + t);
}
exports.tolerance = tolerance;
