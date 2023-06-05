const codigos = ['duckythegamer', 'wynsanity', 'LILITH10TH', '2h6qmsydpq', '2hi8nsuqup', 'fl84best2022', 'C28OH3PVSBMJ', 'X3U108DQHL9', '9FVXNBCK3MI', '7WRD1KSLT6O','imow'];

function generarCodigoAleatorio() {
  const indiceAleatorio = Math.floor(Math.random() * codigos.length);
  const CodigoAleatorio=codigos[indiceAleatorio];
  document.getElementById("CodigoAleatorio").textContent = CodigoAleatorio;
}
