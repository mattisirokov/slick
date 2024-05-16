import { getUserProfileByID } from "@/server/user-profiles/actions";

import ConversationItem from "./ConversationItem";

import { Conversation } from "@/types";

interface UserConversationProps {
  conversations: Conversation[];
  currentUserID: string;
}

export default async function UserConversations({
  conversations,
  currentUserID,
}: UserConversationProps) {
  const getConversationPartner = (conversation: Conversation) => {
    if (conversation.sender.user_id.toString() === currentUserID) {
      return getUserProfileByID(conversation.receiver.user_id);
    } else {
      return getUserProfileByID(conversation.sender.user_id);
    }
  };

  return (
    <div className={"mt-4 flex h-full flex-col gap-3 overflow-auto"}>
      {conversations.map((conversation, index) => (
        <div key={index}>
          <ConversationItem
            conversation={conversation}
            conversationPartner={getConversationPartner(conversation)}
          />
        </div>
      ))}
    </div>
  );
}
