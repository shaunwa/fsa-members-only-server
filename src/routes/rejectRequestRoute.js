import { rejectRequest, getGroup, getRequest, getRequestsForGroup } from '../db';
import admin from 'firebase-admin';

export const rejectRequestRoute = {
    method: 'post',
    path: '/api/requests/:requestId/reject',
    handler: async (req, res) => {
        const token = req.headers.authtoken;
        const { requestId } = req.params;

        const { groupId } = await getRequest(requestId);
        const group = await getGroup(groupId);
        const user = await admin.auth().verifyIdToken(token);

        if (!user || group.ownerId !== user.user_id) {
            return res.status(400).json({ message: "User is not owner of group" });
        }

        await rejectRequest(requestId);
        const updatedRequests = await getRequestsForGroup(groupId);

        res.status(200).json(updatedRequests);
    },
};