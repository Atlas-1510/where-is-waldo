const functions = require("firebase-functions");
const Filter = require("bad-words");
const admin = require("firebase-admin");
admin.initializeApp();

exports.detectEvilUsers = functions.firestore
  .document("levels/{levelID}/scores/{scoreID}")
  .onCreate((doc) => {
    const filter = new Filter();
    const { title } = doc.data();
    return { title, doc, filter };
  })
  .then(({ title, doc, filter }) => {
    if (filter.isProfane(title)) {
      doc.ref.update({ title: "🤐" });
    }
  });
