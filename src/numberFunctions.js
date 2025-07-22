import isPrime from 'prime-number-check';

export const checkNumber = (value) => {
    return isPrime(value) ? `${value} is prime` : `${value} is not prime`;
}