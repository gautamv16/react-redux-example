const initialWidgets = [
  {id: 1, color: 'Red', score: 99, owner: 'Varun'},
  {id: 2, color: 'Taupe', score: 10, owner: 'Sunil'},
  {id: 3, color: 'Green', score: 18, owner: 'Reena'},
  {id: 4, color: 'Blue', score: 20, owner: 'Raman'},
  {id: 5, color: 'White', score: 19, owner: 'Veer'}
];

export function getWidgets(req) {
  let widgets = req.session.widgets;
  if (!widgets) {
    widgets = initialWidgets;
    req.session.widgets = widgets;
  }
  return widgets;
}

export default function load(req) {
  return new Promise((resolve, reject) => {
    // make async call to database
    setTimeout(() => {
      if (Math.random() < 0.33) {
        reject('Widget load fails 33% of the time. You were unlucky.');
      } else {
        resolve(getWidgets(req));
      }
    }, 1000); // simulate async load
  });
}
