import { NextResponse } from 'next/server'

import prisma from '@/utils/prisma'
import isAuth from '@/utils/talksAuth'

type TalksItem = {
  content: string
  images?: string[]
  tags?: string[]
}

// Talks API KEY
const API_KEY = process.env.TALKS_API_KEY

// GET: get talks data
export async function GET() {
  try {
    const data = await prisma.talks.findMany()

    return NextResponse.json({ code: 200, message: 'success', data })
  } catch (error) {
    return NextResponse.json({ code: 404, message: 'Not Found' })
  }
}

// POST: Add talks data
export async function POST(request: Request) {
  if (!isAuth(request, API_KEY)) {
    return NextResponse.json({ code: 401, message: 'Unauthorized' })
  }

  try {
    const { content, images, tags }: TalksItem = await request.json()

    await prisma.talks.create({
      data: {
        content,
        images,
        tags,
      },
    })

    return NextResponse.json({ code: 200, message: 'success' })
  } catch (error) {
    return NextResponse.json({ code: 500, message: 'Internal Server Error' })
  }
}

// Delete: Delete talks data
export async function DELETE(request: Request) {
  if (!isAuth(request, API_KEY)) {
    return NextResponse.json({ code: 401, message: 'Unauthorized' })
  }

  try {
    const url = new URL(request.url)
    const id = url.searchParams.get('id')

    await prisma.talks.delete({
      where: {
        id,
      },
    })

    return NextResponse.json({ code: 200, message: 'success' })
  } catch (error) {
    return NextResponse.json({ code: 500, message: 'Internal Server Error' })
  }
}

// Update: Modify talks data
export async function PUT(request: Request) {
  if (!isAuth(request, API_KEY)) {
    return NextResponse.json({ code: 401, message: 'Unauthorized' })
  }

  try {
    const url = new URL(request.url)
    const id = url.searchParams.get('id')

    const { content, images, tags }: TalksItem = await request.json()

    await prisma.talks.update({
      where: {
        id,
      },
      data: {
        content,
        images,
        tags,
      },
    })

    return NextResponse.json({ code: 200, message: 'success' })
  } catch (error) {
    return NextResponse.json({ code: 500, message: 'Internal Server Error' })
  }
}
