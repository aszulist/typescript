
class Example{

    wyswietl(dzialanie: (n1: number, n2: number) => number): void{
        console.log(dzialanie(4, 2));
    }
}

var przyklad = new Example();

przyklad.wyswietl((n1, n2) => n1 + n2);

let dodawanie = (n1, n2) => n1 + n2;

let dodaj2 = (n1: number, n2: number): number => {
  return n1 + n2;
};

przyklad.wyswietl(dodawanie);
przyklad.wyswietl(dodaj2);