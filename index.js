class MovieStore{
    constructor(){
        this.namesOfMovie = []
        this.lenderName = ['jonh']
        this.availableMovies = ['home']
    }
    isOwing(home){
        for(let i = 0; i < this.lenderName.length; i++){
            console.log(this.lenderName)
            if(this.lenderName[i] === home.toString()){
                return false 
            }
        }
    }
}

let nn = new MovieStore()
// console.log(nn.isOwing('jon'))
class Lender  {

    constructor( customerName, namesOfMovies){
        this.customerName = customerName;
        this.namesOfMovies = namesOfMovies
    }


    borrow(customerName,namesOfMovies){
        let moviestore = new MovieStore() 

        // check if the user is owing any movie before 
        if(moviestore.isOwing(customerName) === false ){
            return console.log(`${customerName} already owing a movie`)
        }else{

            let res = moviestore.availableMovies.filter(function(curr){
                return curr = 'home'
            })
            if(res == 'home'){
                moviestore.namesOfMovie.push(namesOfMovies)
                moviestore.lenderName.push(customerName)
            }

            let deleteMovies = moviestore.availableMovies.findIndex(curr => curr === namesOfMovies.toString())
            delete moviestore.availableMovies[deleteMovies]
        }

        console.log(moviestore)
        // console.log(moviestore)
    }

    giveBack(customerName,namesOfMovies){
    let moviestore = new MovieStore()
    let nameOfCustomer = moviestore.lenderName.find(curr =>curr === customerName.toString())
    let indexOfCustomer = moviestore.lenderName.findIndex(curr => curr === customerName.toString())
    if(customerName === nameOfCustomer){
        delete moviestore.lenderName[indexOfCustomer]
        moviestore.availableMovies.push(namesOfMovies)
    }
    console.log(moviestore)

    return console.log(`${customerName} has returned his movie`)
}
}

let lenderOf = new Lender()
lenderOf.borrow("jon","home")
lenderOf.borrow("jon","home")
lenderOf.giveBack("jon",'home')



