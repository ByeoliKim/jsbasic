//const x = 5;
//console.log(2 ** 3 ** 2);

//산술연산자 중 %의 연산자 우선순위를 증명하시오.
console.log(5 - 4 + (4 + 7) % 2);

const pm1 = 2 + 5 % 3 - 1; // 3 ==> +,- < %
const pm2 = 2 + (5 % 3) - 1;
console.log(pm1, pm2, pm1 === pm2 ? '+- < %' : '+- > %')

const ms1 = 2 * 5 % 3 * 10; // 3 ==> +,- < %
const ms2 = 2 * (5 % 3) * 10;
console.log(ms1, ms2, ms1 === ms2 ? '*/ < %' : '*/ > %')

const pow1 = 2 ** 5 % 3 ** 2;
const pow2 = 2 ** (5 % 3) ** 2;
console.log(pow1, pow2, pow1 === pow2 ? '** < %' : '** > %')
