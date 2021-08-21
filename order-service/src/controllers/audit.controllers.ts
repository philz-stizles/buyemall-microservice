import Audit from '../models/mongoose/audit.model';
import * as factory from '../factories/handler.factory';

export const getFilteredAuditTrail = factory.getAll(Audit);

export const getAuditById = factory.getOne(Audit);
