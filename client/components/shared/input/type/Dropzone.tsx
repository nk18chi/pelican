import { useCallback, useMemo } from 'react';
import { useDropzone } from 'react-dropzone';
import {
  Center,
  useColorModeValue,
  Icon,
  Image,
  Box,
  Button,
  Flex,
} from '@chakra-ui/react';
import { AiFillFileAdd } from 'react-icons/ai';
import { css } from '@emotion/react';

const stylePage = css`
  .dropzone-thumb {
    width: 160px;
    aspect-ratio: 1;
    object-fit: cover;
  }
  .file-preview-container {
    display: flex;
    flex-direction: column;
    gap: 4px;
  }
`;

export type TDropzoneConfig = {
  accept?: { accepted: string[] };
  maxFiles?: number;
  multiple?: boolean;
};

interface DropzoneProps {
  value: File[];
  onChange: (files: File[]) => void;
  dropzoneConfig?: TDropzoneConfig;
}
const Dropzone = ({ value, onChange, dropzoneConfig = {} }: DropzoneProps) => {
  const onDrop = useCallback(
    (acceptedFiles: File[]) => {
      onChange(acceptedFiles);
    },
    [onChange]
  );

  const thumbs = useMemo(() => {
    if (!value) return '';
    return value.map((file, i) => (
      <div className="file-preview-container" key={i}>
        <div className="thumb">
          <div className="thumbInner">
            <Image
              className="dropzone-thumb"
              src={URL.createObjectURL(file)}
              alt="dropzone-thumb"
            />
          </div>
        </div>
        <Button
          colorScheme="gray"
          className="material-icons delete"
          onClick={(e) => {
            e.preventDefault();
            onChange(value ? value.filter((_, j) => i !== j) : []);
          }}
        >
          Remove
        </Button>
      </div>
    ));
  }, [value, onChange]);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    ...dropzoneConfig,
  });

  const dropText = isDragActive
    ? 'Drop the files here ...'
    : "Drag 'n' drop files here, or click to select files";

  const activeBg = useColorModeValue('gray.100', 'gray.600');
  const borderColor = useColorModeValue(
    isDragActive ? 'teal.300' : 'gray.300',
    isDragActive ? 'teal.500' : 'gray.500'
  );

  return (
    <Box css={stylePage}>
      <Center
        p={5}
        cursor="pointer"
        bg={isDragActive ? activeBg : 'transparent'}
        _hover={{ bg: activeBg }}
        transition="background-color 0.2s ease"
        borderRadius={4}
        border="3px dashed"
        borderColor={borderColor}
        {...getRootProps()}
      >
        <input {...getInputProps()} />
        <Icon as={AiFillFileAdd} mr={2} />
        <p>{dropText}</p>
      </Center>
      <Flex m={2}>
        <aside className="thumbsContainer">{thumbs}</aside>
      </Flex>
    </Box>
  );
};

export default Dropzone;
