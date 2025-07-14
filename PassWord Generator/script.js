function generatePassword() {
  const length = +document.getElementById('length').value;
  const useUpper = document.getElementById('uppercase').checked;
  const useLower = document.getElementById('lowercase').checked;
  const useNum = document.getElementById('numbers').checked;
  const useSym = document.getElementById('symbols').checked;

  const upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const lower = "abcdefghijklmnopqrstuvwxyz";
  const numbers = "0123456789";
  const symbols = "!@#$%^&*()_+{}[]";

  let chars = '';
  if (useUpper) chars += upper;
  if (useLower) chars += lower;
  if (useNum) chars += numbers;
  if (useSym) chars += symbols;

  let password = '';
  for (let i = 0; i < length; i++) {
    password += chars.charAt(Math.floor(Math.random() * chars.length));
  }

  document.getElementById('result').textContent = password;
}