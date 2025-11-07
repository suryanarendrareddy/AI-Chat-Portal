import {
  Calendar,
  Home,
  Inbox,
  Search,
  Settings,
  Bot,
  MessageSquare,
  MessageSquarePlus,
  Zap,
} from 'lucide-react'

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from '@/components/ui/sidebar'
import { Badge } from '@/components/ui/badge'
import { Link, NavLink } from 'react-router-dom'
import { Button } from './ui/button'
import { useEffect, useState } from 'react'
import { useQuery } from '@tanstack/react-query'
import { cn } from '@/lib/utils'
import api from '@/api'

interface Conversation {
  id: string
  title: string
  started_at: string
}

const mainNav = [
  { title: 'Home', url: '/', icon: Home },
  { title: 'Inbox', url: '#', icon: Inbox },
  { title: 'Calendar', url: '#', icon: Calendar },
  { title: 'Search', url: '#', icon: Search },
  { title: 'Settings', url: '#', icon: Settings },
]

export function AppSidebar() {
  const [conversations, setConversations] = useState<Conversation[]>([])

  const { data } = useQuery({
    queryKey: ['conversations'],
    queryFn: async () => {
      const response = await api.get('/conversations/')
      return response.data
    },
  })

  useEffect(() => {
    if (data) {
      setConversations(data)
    }
  }, [data])

  return (
    <Sidebar className="bg-background text-foreground border-r">
      <SidebarContent className="flex flex-col justify-between h-full">
        <div>
          {/* Main Navigation */}
          <SidebarGroup>
            <SidebarGroupLabel className="text-xs text-muted-foreground uppercase px-4 pt-4 pb-2">
              Main Menu
              <Badge
                variant="secondary"
                className="ml-2 text-[10px] px-1.5 py-0.5"
              >
                Pro
              </Badge>
            </SidebarGroupLabel>

            <SidebarGroupContent>
              <SidebarMenu>
                {mainNav.map((item) => (
                  <SidebarMenuItem key={item.title}>
                    <SidebarMenuButton asChild>
                      <Link
                        to={item.url}
                        className="flex items-center gap-3 px-4 py-2 hover:bg-muted rounded-md transition"
                      >
                        <item.icon className="w-5 h-5 text-muted-foreground" />
                        <span className="text-sm font-medium">
                          {item.title}
                        </span>
                      </Link>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                ))}
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>

          {/* New Chat Button */}
          <div className="px-4 pt-4">
            <Button
              variant="secondary"
              className="w-full justify-start cursor-pointer gap-2"
              asChild
            >
              <Link to="/chats/new">
                <MessageSquarePlus className="w-4 h-4" />
                New Chat
              </Link>
            </Button>
          </div>

          {/* All Conversations */}
          {conversations.length > 0 && (
            <SidebarGroup className="mt-6">
              <SidebarGroupLabel className="text-xs text-muted-foreground uppercase px-4 pb-2">
                All Chats
              </SidebarGroupLabel>

              <SidebarGroupContent>
                <SidebarMenu>
                  {conversations.map((chat) => (
                    <SidebarMenuItem key={chat.id}>
                      <NavLink to={`/chats/${chat.id}`}>
                        {({ isActive }) => (
                          <SidebarMenuButton
                            className={cn(
                              'flex items-center gap-3 px-4 py-2 rounded-md transition cursor-pointer',
                              isActive ? 'bg-muted' : 'hover:bg-muted'
                            )}
                          >
                            <MessageSquare className="w-4 h-4 text-muted-foreground" />
                            <span className="text-sm truncate">
                              {chat.title?.startsWith("'") ||
                              chat.title?.startsWith('"')
                                ? chat.title.slice(1, -1)
                                : chat.title || 'Untitled Chat'}
                            </span>
                          </SidebarMenuButton>
                        )}
                      </NavLink>
                    </SidebarMenuItem>
                  ))}
                </SidebarMenu>
              </SidebarGroupContent>
            </SidebarGroup>
          )}

          {/* Explore GPTs */}
          <SidebarGroup className="mt-6">
            <SidebarMenu>
              <SidebarMenuItem>
                <SidebarMenuButton asChild>
                  <Link
                    to="#"
                    className="flex items-center gap-3 px-4 py-2 hover:bg-muted rounded-md transition"
                  >
                    <Bot className="w-5 h-5 text-muted-foreground" />
                    <span className="text-sm font-semibold">Explore GPTs</span>
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>
            </SidebarMenu>
          </SidebarGroup>
        </div>

        {/* Upgrade CTA */}
        <div className="p-4 border-t">
          <Link
            to="#"
            className="flex items-center justify-between bg-primary text-primary-foreground px-4 py-2 rounded-md hover:bg-primary/90 transition"
          >
            <span className="flex items-center gap-2 text-sm font-medium">
              <Zap className="w-4 h-4" />
              Upgrade to Pro
            </span>
            <Badge variant="secondary" className="text-[10px] px-1.5 py-0.5">
              New
            </Badge>
          </Link>
        </div>
      </SidebarContent>
    </Sidebar>
  )
}
