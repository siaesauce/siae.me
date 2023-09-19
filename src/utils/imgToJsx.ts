import fs from 'fs'
import sizeOf from 'image-size'
import { Literal, Node, Parent } from 'unist'
import { visit } from 'unist-util-visit'

type ImageNode = Parent & {
  url: string
  alt: string
  name: string
  title: string
  attributes: (Literal & { name: string })[]
}

export default function imgToJsx() {
  return (tree: Node) => {
    visit(
      tree,
      // only visit p tags that contain an img element
      (node: ImageNode) =>
        node.type === 'paragraph' && node.children.some((n) => n.type === 'image'),
      (node: Parent) => {
        const imageNode = node.children.find((n) => n.type === 'image') as ImageNode
        if (fs.existsSync(`${process.cwd()}/public${imageNode.url}`)) {
          const dimensions = sizeOf(`${process.cwd()}/public${imageNode.url}`)
          ;(imageNode.type = 'mdxJsxFlowElement'),
            (imageNode.name = 'Image'),
            (imageNode.attributes = [
              { type: 'mdxJsxAttribute', name: 'alt', value: imageNode.alt },
              { type: 'mdxJsxAttribute', name: 'src', value: imageNode.url },
              { type: 'mdxJsxAttribute', name: 'width', value: dimensions.width },
              { type: 'mdxJsxAttribute', name: 'height', value: dimensions.height },
            ])
          node.type = 'div'
          node.children = [imageNode]
        }
      },
    )
  }
}
