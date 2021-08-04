import { PostType } from './post';

export interface MetaProps
  extends Pick<PostType, 'date' | 'description' | 'image' | 'title' | 'edited'> {
  /**
   * For the meta tag `og:type`
   */
  type?: string;
}
