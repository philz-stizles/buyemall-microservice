import { firestore } from '@/firebase/config'

class ProjectDataService {
  constructor(db) {
    this.db = db.collection('/projects')
  }

  getAll(orderBy = ['createdAt', 'desc']) {
    return this.db.orderBy(...orderBy)
  }

  get(id) {
    return this.db.doc(id).get()
  }

  create(data) {
    return this.db.add(data)
  }

  update(id, data) {
    return this.db.doc(id).update(data)
  }

  delete(id) {
    return this.db.doc(id).delete()
  }
}

export default new ProjectDataService(firestore)
