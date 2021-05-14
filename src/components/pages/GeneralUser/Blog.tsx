import { Image } from "@chakra-ui/image";
import { Box, Flex } from "@chakra-ui/layout";
import { useDispatch, useSelector } from "react-redux";
import { selectAdmin } from "../../../features/user/userSlice";
import { memo, useEffect, useRef, useState } from "react";
import { UseGetAdmin } from "../../../hooks/UseGetAdmin";
import { Post } from "../../../types/post";
import "../../../reset.css";
import marked from "marked";
import { useHistory } from "react-router";
import { setSelectPost } from "../../../features/post/postSlice";
import no_image from "../../../images/no_image.jpeg";
import { UseGetUrl } from "../../../hooks/UseGetUrl";
import { UseDeletePost } from "../../../hooks/UseDeletePost";
import { Dialog } from "../../molecules/Dialog";
import { PostAdminFunction } from "../../molecules/PostAdminFunction";
import { PostHeading } from "../../molecules/PostHeading";
import { CommentList } from "../../organisms/CommentList";
import {
  TwitterShareButton,
  FacebookShareButton,
  TwitterIcon,
  FacebookIcon,
} from "react-share";
import { Helmet, HelmetProvider } from "react-helmet-async";

type PostType = {
  post: Post;
};

export const Blog: React.VFC<PostType> = memo((props) => {
  const { post } = props;
  const admin = useSelector(selectAdmin);
  const dispatch = useDispatch();
  const { getUserInfo } = UseGetAdmin();
  const [isOpen, setIsOpen] = useState(false);
  const onClose = () => setIsOpen(false);
  const cancelRef: any = useRef();
  const content = post.body;
  const history = useHistory();
  const { getImage, imageUrl } = UseGetUrl(post);
  const { handleDelete } = UseDeletePost(post);

  useEffect(() => {
    getUserInfo();
    getImage();
  }, []);

  const handleDeletePost = async () => {
    handleDelete();
    onClose();
    history.push("/adminUser");
  };

  const handleEdit = () => {
    dispatch(setSelectPost(post.id));
    history.push("/adminUser/editPost");
  };
  return (
    <>
      <HelmetProvider>
        <Helmet>
          <title>{post.title}</title>
          <meta
            property="image"
            content={imageUrl !== "" ? imageUrl : no_image}
          />
          <meta name="twitter:card" content="summary_large_image" />
        </Helmet>
        <Box w={{ base: "90%", md: "640px" }} mx="auto" minH="100vh" bg="white">
          <Image
            src={imageUrl !== "" ? imageUrl : no_image}
            alt="blog image"
            w="100%"
            h={{ base: "300px", md: "450px" }}
            backgroundSize="cover"
          />
          <PostHeading post={post} />
          <hr />
          {admin && (
            <PostAdminFunction handleEdit={handleEdit} setIsOpen={setIsOpen} />
          )}
          <Box p="5" pb="10">
            <span dangerouslySetInnerHTML={{ __html: marked(content) }} />
            <Flex mt="2" justifyContent="flex-end">
              <Box mr="4">
                <TwitterShareButton
                  url={`https://www.ryota-programming-blog.com/${post.id}`}
                  title={post.title}
                >
                  <TwitterIcon size={32} round />
                </TwitterShareButton>
              </Box>
              <Box>
                <FacebookShareButton
                  url={`https://www.ryota-programming-blog.com/${post.id}`}
                >
                  <FacebookIcon size={32} round />
                </FacebookShareButton>
              </Box>
            </Flex>
          </Box>
          <CommentList post={post} />
        </Box>
        <Dialog
          isOpen={isOpen}
          cancelRef={cancelRef}
          onClose={onClose}
          handleDeletePost={handleDeletePost}
        />
      </HelmetProvider>
    </>
  );
});
