import React from 'react';
import { Button, Card, Icon, Label, Image } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import moment from 'moment';
import LikeButton from '../Buttons/LikeButton';
import DeleteButton from '../Buttons/DeleteButton';
import MyPopup from '../../utils/MyPopup';
import { QUERY_USERS } from '../../utils/queries';
import { useQuery } from '@apollo/client';

function PostCard({
  post: { body, createdAt, id, likeCount, commentCount, likes }
}) {
  // const { user } = useContext(AuthContext);
  // const { loading, data } = useQuery(QUERY_USERS);
  // const user = data?.users || [];
 const user = 'user';
  return (
    <Card fluid>
      <Card.Content>
        <Image
          floated="right"
          size="mini"
          src="https://react.semantic-ui.com/images/avatar/large/molly.png"
        />
        <Card.Header>{user}</Card.Header>
        <Card.Meta as={Link} to={`/posts/${id}`}>
          {moment(createdAt).fromNow(true)}
        </Card.Meta>
        <Card.Description>{body}</Card.Description>
      </Card.Content>
      <Card.Content extra>
        <LikeButton user={user} post={{ id, likes, likeCount }} />
        <MyPopup content="Comment on post">
          <Button labelPosition="right" as={Link} to={`/posts/${id}`}>
            <Button color="blue" basic>
              <Icon name="comments" />
            </Button>
            <Label basic color="blue" pointing="left">
              {commentCount}
            </Label>
          </Button>
        </MyPopup>
        {user && user.user === user && <DeleteButton postId={id} />}
      </Card.Content>
    </Card>
  );
}

export default PostCard;