import { nanoid } from 'nanoid';
import get from 'lodash/get';

export function addUidToData(input, path='content.components') {
  let components = get(input, path, []);
  
  return {
    ...input,
    content: {
      ...input.content,
      components: components.map(item => ({
        ...item,
        uid: nanoid()
      }))
    }
  };
}
