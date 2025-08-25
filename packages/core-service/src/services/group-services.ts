import prismaClient from "packages/core-service/src/app/config/database";
import { ResponseError } from "shared";

export class GroupService {
  static async createGroup(groupData: any) {
    // Group creation logic here
  }

  static async getGroupById(groupId: string) {
    // Get group by ID logic here
  }

  static async updateGroup(groupId: string, groupData: any) {
    // Update group logic here
  }

  static async deleteGroup(groupId: string) {
    // Delete group logic here
  }

  static async getGroupByName(groupName: string) {
    // Get group by name logic here
    const group = await prismaClient.group.findUnique({
      where: {
        name: groupName
      }
    });

    if (!group) {
      const userGroup = await prismaClient.group.findFirst({
        where: {
          name: 'USER'
        }
      });
      if (!userGroup) {
        throw new ResponseError(500, "Default USER group not found. Please create it first.");
      }
      return userGroup;
    }
    return group;
  }
}