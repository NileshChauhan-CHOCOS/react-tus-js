import ProductCard from "../productcard/ProductCard";
const products = [
    {
        "id" : 0,
        "title" : "Brief History of Time",
        "author" : "Stephen Hawking",
        "description" : "Explore the mysteries of the universe with this acclaimed masterpiece by a celebrated physicist. From the origins of time to the boundaries of the universe, delve into the secrets of space and time. Discover the great theories of the cosmos from Newton to Einstein, and explore the wonders of the Big Bang, black holes, and more. Written in clear and concise language, this book offers a fascinating and accessible introduction to the universe and its wonders. This new edition includes exciting updates from the author, along with a companion app, Stephen Hawking's Pocket Universe.",
        "img" : "D:/javascript/react-tutorial/public/Quantum-mechanics.png"
    },
    {
        "id" : 1,
        "title" : "University Physics with Modern Physics",
        "author" : "Hugh D. Young",
        "description" : "This university physics textbook emphasizes fundamental principles and how to apply them. It offers a clear and thorough narrative, as well as broad, deep, and thoughtful sets of worked examples that provide students with key tools for developing both conceptual understanding and problem-solving skills. With a focus on visual learning and new problem types, the Fourteenth Edition adds new features influenced by education research to teach the skills needed by today's students. Instructors can also use the MasteringPhysics® online homework, tutorial, and assessment system to engage students before, during, and after class with powerful content."

    },
    {
        "id" : 2,
        "title" : "Fundamentals of Physics",
        "author" : "R. Shankar",
        "description" : "This engaging book covers the fundamentals of physics, from Galileo's and Newton's discoveries to the revolutionary ideas of relativity and quantum mechanics. Based on an innovative online course by a well-known physicist and educator, it provides a solid foundation in the principles and methods of physics. Ideal for college-level students of physics, chemistry, and engineering, and for general readers interested in science. Includes instructor resources and sample exams"

    },
    {
        "id" : 3,
        "title" : "The Elegant Universe",
        "author" : "Brian Greene",
        "description" : "This fascinating book by a leading string theorist explores the mysteries of the universe, revealing its complex fabric of eleven dimensions and the vibrations of energy that generate all matter. With engaging prose, the book makes even the most esoteric scientific concepts accessible and thoroughly entertaining, offering a new understanding of the world around us."

    },
    {
        "id" : 4,
        "title" : "Basic Physics",
        "author" : "Karl F. Kuhn",
        "description" : "Master the fundamentals of physics with this practical, complete, and easy-to-use guide. This book makes learning key concepts a pleasure, not a chore- even if you don't consider yourself a `science` person. Whether you need help in a course, want to review the basics for an exam, or simply have always been curious about physical phenomena, this book is for you! Featuring a helpful question-and-answer format and end-of-chapter self-tests, this fully up-to-date edition of Basic Physics lets you work at your own pace and reinforces what you learn"

    }
]
function getProductsApi(callback){
    setTimeout(function(){
        callback(products);
    },5000);
}
function ProductList(){
        let allProducts = [];
        getProductsApi(function(res){
            allProducts = res;
            console.log(allProducts);
        });
    return(
        <div className="ProductList">
            {
                products.map(product =>{
                    return (<ProductCard key ={product.id} title = {product.title} author = {product.author} description = {product.description}/>)
                })
            }
        </div>
    );
}
export default ProductList;