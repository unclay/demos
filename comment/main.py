import csv
import time
from youtube_comment_downloader import *
import argparse

def scrape_youtube_comments(video_url, output_file="youtube_comments.csv", max_comments=None):
    """
    爬取YouTube视频评论并保存到CSV文件
    
    参数:
    video_url (str): YouTube视频URL
    output_file (str): 输出CSV文件名
    max_comments (int): 最大评论数，None表示爬取所有评论
    """
    # 初始化评论下载器
    downloader = YoutubeCommentDownloader()
    
    # 获取评论生成器
    comments = downloader.get_comments_from_url(video_url, sort_by=SORT_BY_POPULAR)
    
    # 打开CSV文件准备写入
    with open(output_file, 'w', newline='', encoding='utf-8') as csvfile:
        fieldnames = ['author', 'text', 'time', 'likes', 'reply_count']
        writer = csv.DictWriter(csvfile, fieldnames=fieldnames)
        
        # 写入表头
        writer.writeheader()
        
        count = 0
        print(f"开始爬取评论，将保存到 {output_file}...")
        
        try:
            for comment in comments:
                # 写入评论数据
                writer.writerow({
                    'author': comment['author'],
                    'text': comment['text'],
                    'time': comment['time'],
                    'likes': comment['votes'],
                    'reply_count': comment.get('reply_count', 0)
                })
                
                count += 1
                if count % 10 == 0:  # 每爬取10条评论显示一次进度
                    print(f"已爬取 {count} 条评论...")
                
                # 检查是否达到最大评论数
                if max_comments and count >= max_comments:
                    break
                
                # 加入延迟，避免请求过于频繁
                time.sleep(0.1)
                
        except Exception as e:
            print(f"爬取过程中发生错误: {str(e)}")
        finally:
            print(f"爬取完成，共获取 {count} 条评论，已保存到 {output_file}")

if __name__ == "__main__":
    # 设置命令行参数
    parser = argparse.ArgumentParser(description='爬取YouTube视频评论并保存到CSV文件')
    parser.add_argument('url', help='YouTube视频的URL')
    parser.add_argument('-o', '--output', default='youtube_comments.csv', help='输出CSV文件路径')
    parser.add_argument('-m', '--max', type=int, help='最大评论数')
    
    args = parser.parse_args()
    
    # 调用爬取函数
    scrape_youtube_comments(args.url, args.output, args.max)
