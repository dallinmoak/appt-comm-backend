import { Mongoose } from "mongoose";

/**
 * given a query object that identifies a record by _id, it fetches related child documents and merges them into the result. The child documents are stored in a key named after the docName parameter. The query object must have a _conditions._id key that matches the foreign key in the child documents. This function executes the query and so can't be chained with other query methods.
 *
 * @param {Mongoose.Model} model - The Mongoose model to query.
 * @param {string} fk - The foreign key to match in the child documents.
 * @param {string} docName - The key to store the child docs in the result.
 * @param {Mongoose.query} query - The Mongoose query object.
 * @returns {Promise<Mongoose.query>} - A promise that resolves to an executed query with the child docs inside.
 */
export const withChildren = async (model, fk, docName, query) => {
  const keyVal = query._conditions._id;
  let matcher = {};
  matcher[fk] = keyVal;
  const children = await model.find(matcher);
  return query.then((result) => {
    let output = { ...result._doc };
    output[docName] = children;
    return output;
  });
};
