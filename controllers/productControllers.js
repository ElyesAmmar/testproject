const Products = require("../model/product");



exports.getProducts = async(req, res)=>{
    try{
       const result= await Products.find({})
       return res.status(200).send({msg:"getting Products success", response: result})
    }catch(error){
        console.log(error)
        return res.status(500).send({msg:"getting Products failed"})
    }
}

exports.getOneProductById = async(req, res)=>{
    try {
        const id= req.params.id
        const result = await Products.findById(id)
        return res.status(200).send({msg:"getting product succes", response: result})
    } catch (error) {
        console.log(error)
        return res.status(500).send({msg:"getting Product failed"})
    }
}


exports.postProduct = async(req,res)=>{
    try {
        let productid= 0
        let lastProduct = await Products.findOne().sort({_id: -1}); // Get the last ID in the database
        
        if(lastProduct){
            productid= lastProduct.ProductId + 1
          } else{                                                   // If there are no products in the database, start with ID 1
            productid= 1
        } 
        const query= req.body
        if(!query.Name || !query.Stock || !query.Categorie || !query.Price){
            return res.status(400).send({msg:"please enter the missing fields"})
        }
        const barcode= await Products.findOne({Barcode:query.Barcode})
        if(barcode){
            return res.status(400).send({msg:"Product exists"})
        }
        else{
            const newProduct= new Products({...query,ProductId:productid});
            await newProduct.save()
        
           return res.status(200).send({msg:"adding product successfully", response:newProduct})
        }
        
    } catch (error) {
        console.log(error)
        return res.status(500).send({msg:"addding Product failed"})
    }
    }
 


exports.updateProduct = async(req,res)=>{
    try {
        const id=req.params.id
        await Products.findOneAndUpdate({_id:id},{$set:{...req.body}})
      return res.status(200).send({msg:"updating product successfully"})
    } catch (error) {
        return res.status(500).send({msg:"updating Product failed"})
    }
}

exports.deleteProduct = async(req,res)=>{
    try {
        const id = req.params.id
        await Products.findOneAndDelete({_id:id},{$set:{...req.body}})
        
        return res.status(200).send({msg:"deleting Product success"})

    } catch (error) {

        return res.status(500).send({msg:"deleting Product failed"})
        
    }
}

// exports.findProductByCode = async(res,req)=>{
//     try {
//         const id= req.query.id
//         console.log(id)
//         const product =  await Products.find({_id:id})
//         return res.status(200).send({msg:"getting product success", response: product})
//         // if (product) {
//         //     console.log('Found product:', product);
//         //    return res.json(product);
//         //   } else {
//         //     console.log('Product not found.');
//         //    return res.status(404).json({ error: 'Product not found' });
//         //   }
//     } catch (error) {

//         // return res.status(500).send({msg:"getting Product failed"})
//     }
// }