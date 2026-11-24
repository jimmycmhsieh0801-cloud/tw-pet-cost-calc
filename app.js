function calcPetNeeds(weightKg, stageFactor = 1.2, foodKcalPer100g = 380) {
  const w = Math.max(0.3, Number(weightKg) || 4);
  const f = Math.max(0.8, Number(stageFactor) || 1.2);
  const kcal = Math.max(50, Number(foodKcalPer100g) || 380);
  const waterMin = Math.round(w * 40);
  const waterMax = Math.round(w * 60);
  const rer = 70 * Math.pow(w, 0.75);
  const der = Math.round(rer * f);
  const dryGrams = Math.round((der / kcal) * 100);
  return { waterMin, waterMax, der, dryGrams };
}
if (typeof document !== "undefined") {
  const ids = ["petWeight", "petStage", "foodKcal"];
  function render() {
    const [w, s, k] = ids.map(id => document.getElementById(id).value);
    const res = calcPetNeeds(w, s, k);
    document.getElementById("waterEl").textContent = `${res.waterMin} ～ ${res.waterMax} ml`;
    document.getElementById("derEl").textContent = `${res.der} kcal`;
    document.getElementById("gramsEl").textContent = `約 ${res.dryGrams} 克 / 天`;
  }
  ids.forEach(id => document.getElementById(id).addEventListener("input", render));
  render();
}
if (typeof module !== "undefined" && module.exports) module.exports = { calcPetNeeds };